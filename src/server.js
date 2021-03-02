// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const port = 3003;

//iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))
    //utilizando os arquivos estaticos(cria todas as rotas)
    .use(express.static('public'))

    //configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
    // rotas da aplicaçao

    .get('/', pages.index)
    .get('/albuns', pages.albuns)
    .get('/todos', pages.todos)
    .get('/postagens', pages.postagens)

//ligar server
.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})
