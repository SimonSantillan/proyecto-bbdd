const { DataTypes } = require("sequelize");

const sequelize = require('../database/conexion.js');

const Certificador = sequelize.define(
    "Registros",
    {
        id_registro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.STRING
        },
        hora: {
            type: DataTypes.STRING
        },
        analista: {
            type: DataTypes.STRING
        },
        titulo_dominio: {
            type: DataTypes.STRING
        },
        descripcion_tags: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.STRING,
            unique: true
        },
        presentacion_tags_checked: {
            type: DataTypes.STRING
        },
        id_img: {
            type: DataTypes.STRING,
            unique: true
        },
        url_publi: {
            type: DataTypes.STRING
        },
        url_picture: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false
    }
);

/* async function crearTabla() {
  
  await Certificador.sync();
}
crearTabla(); */



module.exports = Certificador;