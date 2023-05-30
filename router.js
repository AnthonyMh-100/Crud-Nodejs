const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/',(req,res)=>{

   conexion.query('SELECT * FROM cliente',(error,results)=>{
    if(error) throw error;
    
    res.render('index',{results : results});
   })
})

//RUTA PARA CREAR REGISTRO
router.get('/create',(req,res)=>{
    res.render('create');
})

//CRUD DE LOS -- IMPORTAR EL CRUD

const crud =  require('./controllers/crud');
router.post('/save',crud.save)

//CRUD--- ACTUALIZAR DATOS
router.post('/update',crud.update);
 
//EDITAR VALORES DEL CRUD 
router.get('/edit/:id',(req,res)=>{

    let id = req.params.id;
    conexion.query('SELECT * FROM cliente WHERE id = ?',[id],(error,result)=>{
        if(error)throw error;

        res.render('edit',{user:result[0]})
    })
})

//RUTA PARA ELIMINAR 
router.get('/delete/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query('DELETE FROM cliente WHERE id = ?',[id],(error,result)=>{
        if(error)throw error
        res.redirect('/');
    })
})





module.exports = router;