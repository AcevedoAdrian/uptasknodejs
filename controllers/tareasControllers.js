// importo  los modelos para poder hacer las acciones contra la bd
const Tarea = require("../models/Tareas");
const Proyectos = require("../models/Poyectos");

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

  res.redirect(`/proyectos/${req.params.url}`)
  // proyecto donde vay almacenar en dataVuales donde esta la info
  // console.log(proyecto);
  // console.log(req.body);
  // res.send("Enviado");
};
