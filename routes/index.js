const express = require("express");
// Importo las la fx de routa de expres
const router = express.Router();
// importar express validator
const {
  body
} = require("express-validator/check");

//  llamamos a los controladores para pasarle como parametros a las rutas
const {
  proyectosHome,
  formularioProyecto,
  nuevoProyecto,
  proyectoPorUrl,
  formularioEditar,
  actualizarProyecto
} = require("../controllers/proyectoController");

module.exports = function () {
  // configuro las rutas con los middelwaress
  // con use escuhca todo los verbos http que me solicite
  // ruta para el home
  router.get("/", proyectosHome);

  router.get("/nuevo-proyecto", formularioProyecto);

  router.post(
    "/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    nuevoProyecto
  );

  // Listar Proyecto
  router.get("/proyectos/:url", proyectoPorUrl);

  // Actualizar el Proyecto
  router.get("/proyecto/editar/:id", formularioEditar);
  router.post(
    "/nuevo-proyecto/:id",
    body("nombre").not().isEmpty().trim().escape(),
    actualizarProyecto
  );


  return router;
};