const conexion = require('../database/db');

//CREANDO Y EXPORTANDO LA FUNCION QUE REGISTRARA LOS DATOS
exports.save = (req,res)=>{

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const origen = req.body.origen;

    conexion.query('INSERT INTO cliente SET ?',{nombre:nombre,apellido:apellido,edad:edad,origen:origen},(error,result)=>{
         if(error)throw error
         
         //REDIRECT--- REDIGIRE A LA RUTA QUE LE INDIQUEMOS
         res.redirect('/');

    })

    // console.log(nombre + "-" + apellido + "-",edad + "-", origen);

}

//CREANDO LA FUNCION QUE EDITARA O ACTUALIZARA LOS DATOS
exports.update= (req,res)=>{

    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const origen = req.body.origen;
    
    conexion.query('UPDATE cliente SET ? WHERE id = ?',[{nombre:nombre,apellido:apellido,edad:edad,origen:origen},id],(error,result)=>{
        if(error)throw error
        res.redirect('/');
    })


}
