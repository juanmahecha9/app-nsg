/* modulos, modelos y archivos requeridos */
const fs = require("fs");
const Covid = require("../model/paises.covid.model");

/* GENERACIÓN DE FUNCIONES */

/* Funcion de borrado del archivo generado por el metodo de scrapping */
function dropDataJson() {
  fs.unlink("app/covid-19/datos.json", function (err) {
    if (err) throw err;
    console.log("file deleted");
  });
}
/*  Funcion para cargar los datos del scraping */
function scr() {
  require("../app/app.scraping");
  console.log("Data creada exitosamente");
}
/* CREACION DE FUNCINES PARA LAS RUTAS HTTP */

/* Funcion de prueba */
const control = async (req, res) => {
  dropDataJson()
  await res.send({
    message: "Conectado al servidor en peticion get...",
  });
  //await dropDataJson();
};

/* Funcion para la creacion de los datos de los paises */
const createData = (req, res) => {
  /* 1. remover los datos de la colección de los datos de los paises */
  Covid.remove((err) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      console.log("Datos removidos");
      /* 2. Remover el archivo de generado por el scraping */
     // dropDataJson();
     scr();
    }
  });
  
  /* 3. Generar la nueva data para amacenar en la DB */
  /* llamar el archivo JSON */
  const datos = require("../app/covid-19/datos.json");

  //definir variable de los paises Indicativo
  let ind = [];
  //definir variable de los paises
  let pa = [];
  //definir variable para los casos
  let ca = [];
  //definir variable para la mortalidad
  let mo = [];
  //Definir variable para las muertes
  let mu = [];

  for (i = 0; i < 211; i++) {
    ind[i] = datos[i].indicador;
    pa[i] = datos[i].pais;
    ca[i] = datos[i].casos;
    mo[i] = datos[i].mortalidad;
    mu[i] = datos[i].muertes;
   
   Covid.create({
      indicativo: ind[i],
      pais: pa[i],
      casos: ca[i],
      mortalidad: mo[i],
      muertes: mu[i],
    });
  }

  /* Respuesta */
  res.send({
    message: "Conexión al servido OK",
  });
};

function showData(req, res) {
  //VISUALIZAR
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  Covid.find((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Registros realizados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
}

//borrar todos los datos de una coleccion de mongo.....
const dropAll = (req, res) => {
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  Covid.remove((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Datos encotrados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
};
module.exports = { control, createData, showData, dropAll };
