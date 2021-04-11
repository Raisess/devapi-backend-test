# DEVAPI: Connectors API

> API feita para teste de vaga de desenvolvedor backend na devapi.

## Rodando o projeto

Tenha certeza de ter o [nestjs-cli](https://docs.nestjs.com/cli/overview#installation), [typescript](http://typescriptlang.org/) e o [mongodb-server](https://www.mongodb.com/try/download/community) instalados.

#### Inicie o mongodb

> Os comandos do mongodb são para linux (não tenho certeza se são os mesmos no windows ;-;).

Para usar esta api o mongodb deve estar rodando antes de tudo.

```shell
mongod
```

Para ter certeza de que está rodando, execute o comando:

```shell
mongo
```

#### Configurando ENV vars

Execute o comando:

```shell
cp .env.example .env
```

E escreva as variaveis de acordo com o exemplo abaixo:

> Use uma url de um banco de dados que você tenha ou crie um novo chamado devapi-backend-test

```shell
MONGODB_URL=mongodb://localhost/devapi-backend-test
TOKEN_PK=lxgiwyl
```

A variavel `MONGODB_URL` é referente a url que será utilizada para a conexão com o banco de dados.
A variavel `TOKEN_PK` é referente a chave privada usada pelo JWT.

#### Iniciando a API

Rode o comando:

```shell
npm install
```

Aguarde a instalação das dependências e, execute o comando:

```shell
npm run start
```

A API estará rodando em http://localhost:1939 e o swagger estará rodando em http://localhost:1939/api

#### Popular o banco de dados

Para popular o banco de dados com dados ficticios, execute o comando após a inicialização da API:

```shell
npm run populate-db
```

## Rotas

### Token

#### Criar novo token

Endpoint:
```shell
POST: /token
```

Cria um bearer token válido por 7 horas, para utilização da API.

### Connectors

> Todas as rotas de conectores precisam de um token de autorização bearer no header da requisição

#### Criar novo conector

Endpoint:
```shell
POST: /connectors
```

Body:
```json
{
  "name": "name",
  "status": "status",
  "description": "description",
  "category": "category",
  "type": "SOLID",
  "baseUrl": "baseUrl",
  "logoUrl": "logoUrl",
  "privacy": "PRIVATE"
}
```

Cria um novo conector no banco de dados.

#### Buscar todos os conectores

Endpoint:
```shell
GET: /connectors?filter=type&search=SOLID
```

Obs: Os parametros são opcionais, nesse caso acima, seriam retornados somente os conectores do tipo solid.
Omitilos resulta em buscar todos os conectores.

#### Buscar apenas um conector

Endpoint:
```shell
GET: /connectors/:id
```

Informe o id (uuid, não o "_id") do conector para buscar somente por ele.

#### Editar um conector

Endpoint:
```shell
PUT: /connectors/:id
```

Body:
```json
{
  "name": "name",
  "status": "status",
  "description": "description",
  "category": "category",
  "type": "SOLID",
  "baseUrl": "baseUrl",
  "logoUrl": "logoUrl",
  "privacy": "PRIVATE"
}
```

Para facilitar, os dados que não precisam ser editados podem ser omitidos.

#### Remover um conector

Endpoint:
```shell
DELETE: /connectors/:id
```

Informe o id e remova o conector do banco de dados permanentemente.

## Nota

> Pequena nota sobre o desenvolvimento

Eu nunca tinha usado NestJS antes, fiquei muito animado em aprender para aplicar neste projeto.
Não me pareceu dificil, e eu fiquei completamente apaixonado pelo framework, ainda não entendi muito bem as boas práticas do mesmo, 
mas acredito que posso melhorar com o tempo e uso.

