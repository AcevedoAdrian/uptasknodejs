// import express from 'express'
// para importar express
const express = require('express');
const routes = require('./routes')
// creo una aplicacion de express para crear el servidor
const app = express();

//  llamo a las rutas declarada en route
app.use('/',routes());

// configuro el puerto que voy a escuchar
app.listen(3000)