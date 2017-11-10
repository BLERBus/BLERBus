
var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');


/*Set EJS template Engine*/
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());

/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

// tem que mudar para os seus dados
app.use(
    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : '1234',
        database : 'blerbus',
        debug    : false //set true if you wanna see debug logger
    },'request')

);

// esse é o mapeamento mais basico
app.get('/',function(req,res){
    res.send('Oi! Use a url api/user para conseguir ver nossa aplicação : ) ');
});


//RESTful route - lê-se salvador da pátria
var router = express.Router();

// Ajuda a monitorar o que está rolando
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

//criamos a rota
var curut = router.route('/user');


//R do CRUD  | GET
curut.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM user',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('user',{title:"RESTful Crud Example",data:rows});

         });

    });

});


//C do CRUD | POST
curut.post(function(req,res,next){

    //validação
    req.assert('name','Name is required').notEmpty();
    req.assert('email','A valid email is required').isEmail();
    req.assert('password','Enter a password 6 - 20').len(6,20);

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //pega os dados
    var data = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        linha:req.body.linha,
        bairro:req.body.bairro
     };

    //insere no mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO user set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});

//segunda rota!
var curut2 = router.route('/user/:user_id');

// U do CRUD -> abre form de edição | GET
curut2.get(function(req,res,next){

    var user_id = req.params.user_id;

    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("SELECT linha AND rota FROM user WHERE user_id = ? ",[user_id],function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            //if user not found
            if(rows.length < 1)
                return res.send("User Not found");

            res.render('edit',{title:"Edit user",data:rows});
        });

    });

});

//U do CRUD -> agora é a mesma coisa do create | PUT
curut2.put(function(req,res,next){
    var user_id = req.params.user_id;

    //validação
    req.assert('name','Name is required').notEmpty();
    req.assert('email','A valid email is required').isEmail();
    req.assert('password','Enter a password 6 - 20').len(6,20);

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //dados
    var data = {
        password:req.body.password,
        linha:req.body.liha,
        bairro:req.body.bairro
     };

    //coloca no mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE user set ? WHERE user_id = ? ",[data,user_id], function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});

/*
//D do CRUD | DELETE
curut2.delete(function(req,res,next){

    var user_id = req.params.user_id;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("DELETE FROM user  WHERE user_id = ? ",[user_id], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
        //console.log(query.sql);

     });
});
*/

//now we need to apply our router here
app.use('/api', router);

//start Server
var server = app.listen(3000,function(){

   console.log("Listening to port %s",server.address().port);

});
