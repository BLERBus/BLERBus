# Estrutura mysql

### Database:
```mysql
use blerbus;
```

### Tabela Users:
```mysql
CREATE TABLE Users(
  id              INT(11) not null auto_increment,
  username        VARCHAR(20) not null,
  email           VARCHAR(30),
  senha           VARCHAR(20) not null,
  linhaUtilizada  VARCHAR(30),
  bairro          VARCHAR(30),
  PRIMARY KEY (ID)
  );
```

### Tabela Status de Onibus:
```mysql
CREATE TABLE StatusOnibus(
  linha     VARCHAR(30) not null,
  ponto     VARCHAR(30),
  horario   VARVHAR(10),
  lotação   VARCHAR(20)
  );
```

### Tabela Linhas de Onibus:
```mysql
CREATE TABLE Linha(
  numero  VARHCAR(30),
  linha   VARCHAR(30)
);
```

### Tabela Forum:
```mysql
CREATE TABLE Forum(
  id          INT(11) not null auto_increment,
  pergunta    VARCHAR(255) not null,
  respostas   VARCHAR(255),
  PRIMARY KEY (ID)
);
```




