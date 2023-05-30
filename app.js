
//LLAMANDO AL PAQUETE DE MYSQL
var express = require('express');
var mysql = require('mysql');

var app = express();
app.use(express.json());

//CAPTURA LOS VALORES DE LOS INPUTS DEL FORMULARIO
app.use(express.urlencoded({extended : false}))

app.use('/',require('./router'))

//MOTOR DE PLANTILLAS
app.set('view engine','ejs');


 //CREAR UNA VARIABLE DE ENTONTO EN CASO QUE NUESTO PUERTO ESTE OCUPADO

 var puerto = process.env.PUERTO ||5000;

app.listen(puerto,function(){
    console.log('servidor ok¡¡' + puerto);
})



















// //MOSTRANDO TODOS LOS CLIENTES DE LA BD POR MEDIO UNA API --- METODO GET
// app.get('/api/cliente',(req,res)=>{
//   conexion.query('SELECT * FROM cliente',function(error,fila){
//     if (error) throw error;

//     res.send(fila);


//   });

// });

// //MOSTRANDO A UN SOLO CLIENTE --- METODO GET
// app.get('/api/cliente/:id',(req,res)=>{
//     conexion.query('SELECT * FROM cliente WHERE id = ?',[req.params.id],function(error,filas){
//       if (error) throw error;
  
//       res.send(filas)
  
  
//     });
  
//   });
  
// //INSERTANDO DATOS A LA API ---- METOD POST
//  app.post('/api/cliente',(req,res)=>{
// let data = {
//     nombre:req.body.nombre,
//     apellido : req.body.apellido,
//     edad:req.body.edad,
//     origen : req.body.origen
// }

// let sql = 'INSERT INTO `cliente` SET ?'; 

// conexion.query(sql,data,function(error,result){
//     if(error) throw error;

//     res.send(result);

// })

//  })


//  //EDITAR VALORES DE LA BASE DE DATOS

//  app.put('/api/cliente/:id',(req,res)=>{

// let id = req.params.id;
// let nombre = req.body.nombre;
// let apellido = req.body.apellido;
// let edad =  req.body.edad;
// let origen = req.body.origen;

// let sql = 'UPDATE cliente SET nombre = ? , apellido = ? , edad = ? , origen = ? WHERE id = ?';
  
//   conexion.query(sql,[nombre,apellido,edad,origen,id],function(error,results){

//     if(error)throw error
//     res.send(results);

//   })
//  })


//  //ELMININANDO DATOS CON DELETE
//   app.delete('/api/cliente/:id',(req,res)=>{
 
//     conexion.query('DELETE FROM cliente WHERE id = ?',[req.params.id],(error,fila)=>{

//       if(error) throw error
//       res.send(fila);

//     });

//   });
 













































