exports.proyectosHome = (req, res ) =>{
    // renderiza la vista con el nombre que se encuentra entre parentesis, en este caso un archivo pug que se encuentra en la carpeta views/index.pug y el segundo paramentro son lo que se pasan a la vista como objeto
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

// envia como response un html con el texto que esta dentro de las comillas  
// exports.proyectosNosotros =  (req, res ) =>{
//     res.send('Nosotros');
// }