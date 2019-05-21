/* Importando os módulos */
const express = require('express'); 
const handlebars = require('express-handlebars');
const path = require('path');
const requireDir = require('require-dir');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

/* Inicializando os módulos / Instanciando Arquivos */
const app = express();

/* Definindo os tipos de requisições */
app.use(express.json({
    limit : '5mb'
}));
app.use(express.urlencoded({
    extended : true
}));

/* Configurando a Engine de Renderização */
app.engine('handlebars', handlebars({
    layoutsDir : path.resolve('app\\views\\layouts'),
    partialsDir : path.resolve('app\\views\\components'),
    defaultLayout : 'main',
    extname : '.hbs'
}));
app.set('view engine', 'handlebars');

/* Definindo diretórios de arquivos estáticos */
app.use(express.static(path.join(__dirname, "public")));

/* Configuração de Sessões */
/* Configurando Middlewares Para Criação de Variáveis Globais */

/* Rotas */
app.use('/', require('./routes/index'));

/* Definindo a Porta do Servidor */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Running in http://localhost:3000');
});