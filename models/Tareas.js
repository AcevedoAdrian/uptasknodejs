const {DataTypes} = require("sequelize");
const db = require("../config/db");
const Proyectos = require("./Poyectos");

const Tareas = db.define("tareas", {
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
  },
  tarea: DataTypes.STRING(100),
  estado: DataTypes.INTEGER(),
});
// Formas de ralacionar
Tareas.belongsTo(Proyectos);
// La otra forma es que el e proyecto lleve el id de la tarea pero solo va a tener una sola tarea 
// Proyectos.hasMany(Tareas)
module.exports = Tareas;
