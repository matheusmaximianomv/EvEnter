/* Importando os módulos */
const express = require('express');  // Framework Minimalista baseado em rotas para o desenvolvimento da aplicação
const handlebars = require('express-handlebars'); // Engine para renderização das telas
const path = require('path'); // Pacote para resolução de problemas de enderaçamento de arquivos
const requireDir = require('require-dir'); // Pacote para importação de todos os models
const session = require('express-session'); // Pacote de controle de sessão de usuários
const flash = require('connect-flash'); // Pacote para transmissão de mensagens entre arquivos. 
const passport = require('passport'); // Pacote para resolução de tipo de acessos e facilitador na utilização do controle de sessões

/* Inicializando os módulos / Instanciando Arquivos */
const app = express(); // Iniciando a Aplicação

requireDir('./app/models'); // Importando os módulos

/* Definindo os tipos de requisições */
app.use(express.json({
    limit : '5mb'
}));
app.use(express.urlencoded({
    extended : true
}));

/* Testando o Sequelize */
/* Toda vez que for fazer uma table, lembrar de fazer o migrate no plural e o model no singular */
// const { User } = require('./app/models');
// User.create({name : "Matheus", email : "matheus@email.com", password: "123456789"});

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
app.use(session({
    secret : "Nossa Chave de Acesso Aqui",
    resave : true,
    saveUninitialized : true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

/* Configurando Middlewares Para Criação de Variáveis Globais */
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});

/* Rotas */
app.use('/', require('./routes/index'));

/* Definindo a Porta do Servidor */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Running in http://localhost:3000');
});