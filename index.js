// import express from 'express'
// para importar express
const express = require('express');
const routes = require('./routes')
// permite navegar por las carpetas del sitema
const path =require('path')

// creo una aplicacion de express para crear el servidor
const app = express();

// Indico donde se cargan los archivos staticos
app.use(express.static('public'))

// seteo que Template engines vamos a ultilizar en este caso pug
app.set('view engine', 'pug');

// seteo las carpetas de las vistas, es donde va a encontrar todas las vistas
app.set('views', path.join(__dirname, './views'))



//  llamo a las rutas declarada en route
app.use('/',routes());

// configuro el puerto que voy a escuchar
app.listen(3000)