//Modulos
const mongoose = require("mongoose");

//Configuracion de las variables de entorno
const config = require("../private/app.config.json");

const dbLocal = config.mongoDB.local;
const web = config.mongoDB.web;
const dbWeb = `mongodb+srv://${web}@cluster0-x3ldm.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const url = dbWeb;
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
