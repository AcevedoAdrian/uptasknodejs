const express = require('express');
const router = express.Router();
// export default Router

//  llamamos a los controladores 
const {proyectosHome, formularioProyecto, nuevoProyecto} = require('../controllers/proyectoController');

module.exports = function() {
    // configuro las rutas con los middelwaress
    // con use escuhca todo los verbos http que me solicite
    router.get('/',proyectosHome  );
    router.get('/nuevo-proyecto',formularioProyecto );
    // envio lo del formulario por post
    router.post('/nuevo-proyecto',nuevoProyecto )
    return router;
}