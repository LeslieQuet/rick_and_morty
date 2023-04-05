const express = require('express');
const server = express();
//Cuando hagamos el despliegue del servidor el servicio que lo hostee va a tener un puerto y lo agregamos al puerto: const PORT = proces.env.PORT || 3001;
const PORT = 3001;

//Se importa el index por default
const router = require('./routes');

server.use(router);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

//Integración 02 Web Server - Servidor con Node puro (eliminado el archivo data)//
// var http = require("http");
// var data = require('./utils/data')

// const PORT = 3001;

// http.createServer(function(req, res){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req
//     if(url.includes('/character')){
//         let id = url.split("/").at(-1);
//         const character = data.find(char => char.id == id);
        
//         if(character){
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify(character));
//         } else {
//             res.writeHead(404, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify({ error: 'Character not found'}));
//         }
//     }
// }).listen(PORT, 'localhost');


//Integration 03.Promises
// var http = require("http");
// const PORT = 3001;
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");


// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     if(url.includes('onsearch')){
//         const id = url.split("/").at(-1);
//         getCharById(res, id);
//     }
    
//     if(url.includes('detail')){
//         const id = url.split("/").at(-1);
//         getCharDetail(res, id);
//     }
// }).listen(PORT, 'localhost');//
