exports.proyectosHome = (req, res) => {
  // renderiza la vista con el nombre que se encuentra entre parentesis, en este caso un archivo pug que se encuentra en la carpeta views/index.pug y el segundo paramentro son lo que se pasan a la vista como objeto
  res.render("index", {
    nombrePagina: "Proyectos",
  });
};
exports.formularioProyecto = (req, res) => {
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Poroyecto",
  });
};

exports.nuevoProyecto = (req, res) => {
  //res.send('Holis')
  // para acceder a lo que me llega por request
  // console.log(req.body);

  // validar que tengamos algo en el input
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un Nombre al Proyecto" });
  }

  //   si hay errore
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Poroyecto",
      errores,
    });
  }


};
// envia como response un html con el texto que esta dentro de las comillas
// exports.proyectosNosotros =  (req, res ) =>{
//     res.send('Nosotros');
// }
