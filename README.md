# DEVAPI: Connectors API

> API feita para teste de vaga de desenvolvedor backend na devapi.

## Rodando o projeto

Tenha certeza de ter o [nestjs-cli](https://docs.nestjs.com/cli/overview#installation), [typescript](http://typescriptlang.org/) e o [mongodb-server](https://www.mongodb.com/try/download/community) instalados.

#### Inicie o mongodb

Para usar está api o mongodb deve estar rodando antes de tudo.

```shell
mongod
```

Para ter certeza de que está rodando, execute o comando:

```shell
mongo
```

#### Iniciando a API

Rode o comando:

```shell
npm install
```

Aguarde a instalação das dependencias e, execute o comando:

```shell
npm run start
```

A API estará rodando em http://localhost:1939 e o swagger estará rodando em http://localhost:1939/api

#### Popular o banco de dados

Para popular o banco de dados com dados ficticios, execute o comando após a inicialização da API:

```shell
npm run populate-db
```

## Nota

> Pequena nota sobre o desenvolvimento

Eu nunca tinha usado NestJS antes, fiquei muito animado em aprender para aplicar neste projeto.
Não me pareceu dificil, e eu fiquei completamente apaixonado pelo framework, ainda não entendi muito bem as boas práticas do mesmo, 
mas acredito que posso melhorar com o tempo e uso.

