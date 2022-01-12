const express=require('express');
const path= require('path')
require('dotenv').config();

const app = express();


// node server 
const server= require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./socket/socket')




// paht publico 


const publicPaht=path.resolve(__dirname,'public');

app.use(express.static(publicPaht));

server.listen(process.env.PORT,(err)=>{

    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);


});





// Instalaciones 
/*
npm i dotenv

*/ 