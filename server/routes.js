// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');

const mensajes =[
{
_id: 'xxxx',
user:'bart',
mensaje: 'soy bart'


},
{
    _id: 'xxxx',
user:'homero',
mensaje: 'soy homero'

},
{
    _id: 'xxxx',
user:'march',
mensaje: 'soy march'

},
{
    _id: 'xxxx',
user:'burns',
mensaje: 'soy burns'

}






];





// Get mensajes
router.get('/', function (req, res) {
 // res.json('Obteniendo mensajes');
 res.json(mensajes);
});

// Post mensajes
router.post('/', function (req, res) {

const mensaje={
    mensaje:req.body.mensaje,
    user: req.body.user
};
mensajes.push(mensajes);

console.log(mensajes);


    res.json({
    ok:true,
    mensaje

    });
    
});

//almacenar la suscripcion
router.post('/subscribe',(req,res)=>{

    const suscripcion=req.body;
    push.addSubscription( suscripcion );
    
    res.json('subscribe')
  });
  
  
  //obtener la key usuario (respuesta)
  router.get('/key',(req,res)=>{
    const key = push.getKey();
  
    res.send(key)
  });


//NOSOTROS enviar la notificacion a los usuarios activos
router.post('/push',(req,res)=>{

    const post={
        titulo: req.body.titulo,
        cuerpo: req.body.cuerpo,
        usuario: req.body.usuario

    };



    push.sendPush(post);
    res.json(post)

});

module.exports = router;