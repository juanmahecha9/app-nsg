//Modulos
const express = require("express");

//Funciones del servidor
const control = require("../controller/app.controller");

//Inicializar el router de express
const router = express.Router();

router.get("/", control.control);
router.post("/data", control.createData);
router.get("/data", control.showData);
router.delete("/drop", control.dropAll); 

module.exports = router;
