const express = require ('express');
const app=express();
const colors= require('colors');
const path=require('path');

//settings
app.set('port',8080);
//app.engine('html',require('ejs').renderFile); --- Renderizar archivos HTML a EJS
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index.js'));

app.listen(app.get('port'),()=>{
    console.log('server on port'.red, app.get('port'));
});