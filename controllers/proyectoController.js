// importamos el modelo
const Proyectos = require("../models/Poyectos");

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  // renderiza la vista con el nombre que se encuentra entre parentesis, en este caso un archivo pug que se encuentra en la carpeta views/index.pug y el segundo paramentro son lo que se pasan a la vista como objeto
  res.render("index", {
    nombrePagina: "Proyectos",
    proyectos,
  });
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
    proyectos,
  });
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  //res.send('Holis')
  // para acceder a lo que me llega por request
  // console.log(req.body);

  // validar que tengamos algo en el input
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({
      texto: "Agrega un Nombre al Proyecto",
    });
  }

  //   si hay errore
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
      proyectos,
    });
  } else {
    //  No hay errores
    // insertar en la BD mediante la funcion create y returna un promisis
    //   Proyectos.create({ nombre })
    //     .then(() => console.log("Se Agregaron los datos"))
    //     .catch((error) => console.log(erro));

    // esta forma es con async await
    await Proyectos.create({
      nombre,
    });
    res.redirect("/");
  }
};

exports.proyectoPorUrl = async (req, res, next) => {
  const proyectosPromise = Proyectos.findAll();
  const proyectoPromise = Proyectos.findOne({
    where: {
      url: req.params.url,
    },
  });
  const [proyectos, proyecto] = await Promise.all([
    proyectosPromise,
    proyectoPromise,
  ]);

  // Consultar tareas del Proyecto actual
  if (!proyecto) return next();
  // render a la vista
  res.render("tarea", {
    nombrePagina: "Tareas del Proyecto",
    proyecto,
    proyectos,
  });
};

exports.formularioEditar = async (req, res) => {
  const proyectosPromise = Proyectos.findAll();
  const proyectoPromise = Proyectos.findOne({
    where: {
      id: req.params.id,
    },
  });

  // Usamos el promise.all para poder ejecutar todas las promesas juntas sin que tenga que esperar que finalice 1er para poder ejecutar la 2da. Con esto ejecuto los 2 a la ves
  const [proyectos, proyecto] = await Promise.all([
    proyectosPromise,
    proyectoPromise,
  ]);

  // render a la vista
  res.render("nuevoProyecto", {
    nombrePagina: "Editar Proyecto",
    proyectos,
    proyecto,
  });
};

exports.actualizarProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  //res.send('Holis')
  // para acceder a lo que me llega por request
  // console.log(req.body);

  // validar que tengamos algo en el input
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({
      texto: "Agrega un Nombre al Proyecto",
    });
  }

  //   si hay errore
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
      proyectos,
    });
  } else {
    //  No hay errores
    // insertar en la BD mediante la funcion create y returna un promisis
    //   Proyectos.create({ nombre })
    //     .then(() => console.log("Se Agregaron los datos"))
    //     .catch((error) => console.log(erro));

    // Actualizo el registro de la base de datos
    await Proyectos.update(
      {
        nombre: nombre,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  }
};
// envia como response un html con el texto que esta dentro de las comillas
// exports.proyectosNosotros =  (req, res ) =>{
//     res.send('Nosotros');
// }
