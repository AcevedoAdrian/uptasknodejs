// importo  los modelos para poder hacer las acciones contra la bd
const Tarea = require("../models/Tareas");
const Proyectos = require("../models/Poyectos");
const Tareas = require("../models/Tareas");

exports.agregarTarea = async (req, res, next) => {
  // obteesmos el proyecto actual
  const proyecto = await Proyectos.findOne({
    where: {
      url: req.params.url,
    },
  });
  // leer el valor del input
  const { tarea } = req.body;

  const estado = 0;
  const proyectoId = proyecto.id;

  // incetar en la base de datos
  const resultado = await Tarea.create({ tarea, estado, proyectoId });
  if (!resultado) {
    return next();
  }

  res.redirect(`/proyectos/${req.params.url}`);
  // proyecto donde vay almacenar en dataVuales donde esta la info
  // console.log(proyecto);
  // console.log(req.body);
  // res.send("Enviado");
};

exports.cambiarEstadosTareas = async (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  const tarea = await Tareas.findOne({
    where: {
      id,
    },
  });

  let estado = 0;
  if (tarea.estado === estado) {
    estado = 1;
  }
  tarea.estado = estado;

  // Con esto guado en la base de datos los cambio que realice en ese momento
  const respuesta = await tarea.save();
  if (!respuesta) return next();

  res.status(200).send("todo ok");
};

// Elimina una tarea seleccionada
exports.eliminarTareas = async (req, res, next) => {
  // query toma el nombre que pasamos por params desde axios 
  // params toma el parametro con el nombre que lo definimos en el router
  // console.log(req.query);
  const {id} = req.params;

  // ELiminando con el orm con destroy
  const resultado = await Tareas.destroy({where:{ id}});
  if(!resultado )return next();
  res.status(200).send('Tarea eliminada correctamente');
};
