//Modulos requeridos
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Archivos de configuración
const config = require("../config/app.config.json");
const router = require("../routes/app.routes");

//Inicializar el servidor
const app = express();

//Configuracion del puerto
app.set(
  "port",
  process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3000
);
app.set(
  "bind",
  process.env.BIND
    ? process.env.BIND
    : config.app.bind
    ? config.app.bind
    : "127.0.0.1"
);

//Middlewares o intercambio de infromación entre aplicaciones
app.use(cors());
app.use(morgan("dev"));

app.use(router)


//Exportar el servidor
module.exports = app;
