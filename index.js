// import express from 'express' para poder crear el servidor
const express = require('express');
// importo las rutas que genere en la carpeta routes, estas ya viene ruta y su accion y el metro contra el controlador que ejecuta
const routes = require('./routes');
// permite navegar por las carpetas del sitema
const path = require('path');
// el paque para poder ver los que me manden por req
const bodyParser = require('body-parser');
// para validar las peticiones
const expressValidator = require('express-validator');

// helpers con algunas funciones
const helpers = require('./helpers');
// Crea la conexion a la db
const db = require("./config/db");
const { Router } = require('express');

// inportamos el modelo
require("./models/Poyectos");
require('./models/Tareas')


db.sync()
  .then(() => console.log("conectado"))
  .catch((error) => console.log(error));

// creo una aplicacion de express para crear el servidor
const app = express();

// Indico donde se cargan los archivos staticos
app.use(express.static("public"));

// seteo que Template engines vamos a ultilizar en este caso pug
app.set("view engine", "pug");

//  habilitar bodyParser para leer datos del formularios, lo que me mandan por request. Si o si para recirvir los valores que me manden
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Agregamos express validator a toda la aplicación
app.use(expressValidator());

// seteo las carpetas de las vistas, es donde va a encontrar todas las vistas
app.set("views", path.join(__dirname, "./views"));


// Pasar var dump a la aplicación
app.use((req, res,next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

//  llamo a las rutas declarada en route
app.use('/', routes());

// configuro el puerto que voy a escuchar
app.listen(4000);
