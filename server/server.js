
require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/usuario', (req, res)=> {
  res.send('getusuario');
});

app.post('/usuario',function(req,res){//Crear nuevos registros
    let body = req.body
    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesario'
            //err:errors
        })
    }
    res.json({
        body
    })
})

app.put('/usuario/:id',function(req,res){//Modificae nuevos registros
    let id = req.params.id
    res.send({
        id
    })
});

app.delete('/usuario',function(req,res){//Borrar registros
    res.send('deleteusuairo')
})

app.listen(3000,()=>{
    console.log('Escuchando en el puerto',process.env.PORT)
})