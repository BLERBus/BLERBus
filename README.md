# Estrutura mysql

### Database:
```mysql
use blerbus;
```

### Tabela Users:
```mysql
CREATE TABLE Users(
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
  horario   VARVHAR(50),
  lotação   VARCHAR(50)
  );
```

### Tabela Linhas de Onibus:
```mysql
CREATE TABLE Linha(
  numero  VARHCAR(50),
  linha   VARCHAR(50)
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




