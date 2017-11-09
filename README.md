# Estrutura mysql

### Database:
```
use ......
```

### Tabela Users:
```
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
```
CREATE TABLE StatusOnibus(
  linha     VARCHAR(30),
  ponto     VARCHAR(30),
  horario   VARVHAR(10),
  lotação   VARCHAR(20)
  );
```

### Tabela Linhas de Onibus:
```
CREATE TABLE Linha(
  numero
  linha
);
```

### Tabela Forum:
```
CREATE TABLE Forum(
  id          INT(11) not null auto_increment,
  pergunta    VARCHAR(255),
  respostas   VARCHAR(255),
  PRIMARY KEY (ID)
);
```




