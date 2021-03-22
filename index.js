// import express from 'express'
// para importar express
const express = require("express");
const routes = require("./routes");
// permite navegar por las carpetas del sitema
const path = require("path");
// el paque para poder ver los que me manden por req
const bodyParser = require("body-parser");
// Crea la conexion a la db
const db =require('./config/db.js')
// exportamos el modelo
require('./models/Poyectos')


db.sync()
.then(()=>console.log('conectado'))
.catch(error => console.log(error))
// creo una aplicacion de express para crear el servidor
const app = express();

// Indico donde se cargan los archivos staticos
app.use(express.static("public"));

// seteo que Template engines vamos a ultilizar en este caso pug
app.set("view engine", "pug");

// seteo las carpetas de las vistas, es donde va a encontrar todas las vistas
app.set("views", path.join(__dirname, "./views"));

//  habilitar bodyParser para leer datos del formularios, lo que me mandan por request. Si o si para recirvir los valores que me manden
app.use(bodyParser.urlencoded({ extended: true }));

//  llamo a las rutas declarada en route
app.use("/", routes());

// configuro el puerto que voy a escuchar
app.listen(3000);
