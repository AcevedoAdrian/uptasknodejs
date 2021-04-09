// Nos permiete acceder a los archivos que se encuentran localmente, dentro de nuestra carpeta de proyecto
const path = require("path");

const webpack = require("webpack");

// configuracione de webpack 
module.exports = {
  // seteo el archivo de entrada
  entry: './public/js/app.js',
  // punto de salida, lo que genera webpack lo va guarda en esta configuracion
  output: {
    // nombre del archivo
    filename: 'bundle.js',
    // carpeta donde se va a guardar el primer path es palabra reservada de webpack y dodne especificamos la direccion pertenece al paquete que requerimos
    path: path.join(__dirname, './public/dist')
  },
  // Modulos que requiere webpack 
  module: {
    // las reglas
    rules: [{
      // aca especifico los archivos que voy a utilizar
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }

}