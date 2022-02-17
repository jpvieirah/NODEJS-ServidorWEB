const express = require('express');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();


app.use(routesIndex);
app.use('/users', routesUsers);








app.listen(3000, '127.0.0.1', () => {

    console.log('servidor rodando!');
//a variavel que criamos do server vai ficar ouvindo na porta 3000, ip e função de callback//
});