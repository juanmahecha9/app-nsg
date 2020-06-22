//Modulos
const mongoose = require("mongoose");

//Configuracion de las variables de entorno
const config = require("../private/app.config.json");

const dbLocal = config.mongoDB.local;
const dbWeb = config.mongoDB.web;

const url = dbLocal;
//Operador para seleccion del tipo de seleccion de la base de datos mongo y
//conexion mediante mongoose

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongo DB : Conectado \n ******** \n \n"))
  .catch((err) => console.log("Mongo DB : Sin conexión" + " " + err));
