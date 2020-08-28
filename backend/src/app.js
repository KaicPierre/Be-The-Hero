/*
ROTAS / RECURSOS

METODOS HTTP:

GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

TIPOS DE PARÂMETROS:

    QUERY PARAMS: Parâmetros nomeados enviados na rota após "?"(Filtros, Paginação...)
    ROUTE PARAMS: Parâmetros utilizados para identificar recursos "ex:  users/1"
    REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos

BANCOS DE DADOS:
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
        Formas de fazer a comunicação com o DB
            DRIVER: SELECT * FROM users
            QUERY BUILDER: table('users').select('*').where()
*/

const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors')
const { errors } = require('celebrate')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app
