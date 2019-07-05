/* Importar o módulo do framework express */
const express = require('express')

/* Importar o módulo do consign */
const consign = require('consign')

/* Importa o módulo do body-Parser */
const bodyParser = require('body-parser')

/* Importa o módulo express-validator */
//const expressValidator = require('express-validator')


/* Inicia o objeto express */
const app = express()

/* Setar as variaveis 'views engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/* Configura um middleware express.static */ 
app.use(express.static('./app/public'));

/* Configurar o middleware Body-Parser */
app.use(bodyParser.urlencoded({extended: true}));

/* Configurar o middleware Express-validator */
//app.use(expressValidator());

/* Efetua o autoload das rotas, das models e do controllers para o objeto app */
consign()
    .include('./app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)


/* Exporta o objeto app */
module.exports = app; 