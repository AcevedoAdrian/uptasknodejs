const express = require('express');
const router = express.Router();
// export default Router

module.exports = function() {
    // configuro las rutas con los middelwaress
    // con use escuhca todo los verbos http que me solicite
    router.get('/', (req, res ) =>{
        res.send('Index');
    })
    router.get('/nosotros', (req, res ) =>{
        res.send('Nosotros');
    })
    return router;
}