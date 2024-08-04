// importando modulos 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

//creando una instancia de express
const app = express();

//Middleware para analizar el cuerpo de las solicitudes -> permite que express
// analice el cuerpo de las solicitides 'post' para acceder a los datos del formulario
app.use(bodyParser.urlencoded({extended:true}));

//conectando a mongodb
const mongoURI = 'mongodb://localhost:27017/freelancer';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// definiendo el esquema y modelo 
const contactoSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    email: String,
    mensaje: String
});

const Contacto = mongoose.model('Contacto', contactoSchema);

//definiendo la ruta para el formulario
app.post('/agregar-usuario', (req, res) => {
    const nuevoContacto = new Contacto({
        nombre : req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        mensaje: req.body.mensaje
    });

    nuevoContacto.save((err) => {
        if(err){
            return res.status(500).send('Error al guardar el contacto');
        }
        res.send('Contacto guardado exitosamente');
    })
});

// inicializando el servidor
app.listen(5500, () =>{
    console.log('Servidor corriendo en el puerto 5500');
});

//inicializando la comunicacion de diferentes puertos
app.use(cors());