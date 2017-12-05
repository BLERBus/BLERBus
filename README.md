# Estrutura mysql

### Database:
```mysql
CREATE DATABASE IF NOT EXISTS blerbus; 
USE blerbus;
```

### Tabela Users:
```mysql
CREATE TABLE User(
  id              INT(11) not null auto_increment,
  username        VARCHAR(50) not null,
  email           VARCHAR(50),
  senha           VARCHAR(50) not null,
  linhaUtilizada  VARCHAR(50),
  bairro          VARCHAR(50),
  PRIMARY KEY (ID)
  );
```

### Tabela Status de Onibus:
```mysql
CREATE TABLE StatusOnibus(
  linha     VARCHAR(50) not null,
  ponto     VARCHAR(50),
  horario   VARCHAR(50),
  lotacao   VARCHAR(50)
  );
```

### Tabela Forum:
```mysql
CREATE TABLE Forum(
  id  INT(11) not null auto_increment,
  pergunta    VARCHAR(255) not null,
  respostas   text,
  PRIMARY KEY (ID)
);
```
### Import tabela linhas onibus:
```mysql
CREATE TABLE linhasOnibus (
  codigo                  VARCHAR(30),
  Linha_Atual_Ref         VARCHAR(30),
  Denominacao_Provisoria  VARCHAR(100),
  Nivel_de_rede           VARCHAR(50),
  Tipo_de_linha           VARCHAR(50),
  Modelo_operacional      VARCHAR(50)
)DEFAULT CHARSET= UTF8;
obs: Mudar path do arquivo.
load data local infile 'C:/Users/leo_v/Desktop/GitHub/BLERBus/sptrans-linhas.csv' into table linhasOnibus fields terminated by ',' enclosed by '"' lines terminated by '\n' (codigo, Linha_Atual_Ref, Denominacao_provisoria, Nivel_de_rede, Tipo_de_linha, Modelo_operacional);

delete from linhasOnibus where codigo="codigo";
```
```
ALTER TABLE StatusOnibus MODIFY linha VARCHAR(200);
ALTER TABLE StatusOnibus MODIFY ponto VARCHAR(200);
ALTER TABLE StatusOnibus MODIFY horario VARCHAR(200);
```

### Concerto de código da tabela StatusOnibus, arrumar depois
```
 CREATE TABLE StatusOnibus(
         id int not null auto_increment, 
         linha VARCHAR(50) not null, 
         ponto VARCHAR(50), 
         horario VARCHAR(50), 
         lotacao VARCHAR(50), 
         isDeleted int, 
         primary key(id ));
```
```
Create Table Respostas(
respostaId 	int auto_increment  not null,
resposta 	text not null,
perguntaId      int  not null,
autor		varchar(50),
data		varchar(50),			
hora		varchar(50),
PRIMARY KEY(respostaId)
),
```
