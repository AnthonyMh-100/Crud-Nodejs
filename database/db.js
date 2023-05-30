//REALIZANDO LA CONEXION CON LA BASE DE DATOS
var mysql = require('mysql');


var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ventas'
    });
    
    //CAPTURANDO EL ERROR AL HACER LA CONEXION
    conexion.connect(function(error){
    if (error)throw error;
    console.log('conexion exitosa');
    });

    module.exports = conexion;