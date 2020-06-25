//Modelo del database
const Covid = require("../model/paises.covid.model");

const control = async (req, res) => {
  await res.send("Conectado al servidor en peticion get...");
};

const createData = async (req, res) => {
  await Covid.remove();

  const datos = require("../app/covid-19/datos.json");

  //definir variable de los paises
  let ind = [];

  //definir variable de los casos
  let pa = [];

  //definir variable para los casos
  let ca = [];

  //definir variable para la mortalidad
  let mo = [];

  //Definir variable para las muertes
  let mu = [];

  //Segundo, Guardar los datos en la DB
  let dtty = [];

  for (i = 0; i < 211; i++) {
    ind[i] = datos[i].indicador;
    pa[i] = datos[i].pais;
    ca[i] = datos[i].casos;
    mo[i] = datos[i].mortalidad;
    mu[i] = datos[i].muertes;
    /* dtty.push({
      indicativo: ind[i],
      pais: pa[i],
      casos: ca[i],
      mortalidad: mo[i],
      muertes: mu[i],
    }); */
    await Covid.create({
      indicativo: ind[i],
      pais: pa[i],
      casos: ca[i],
      mortalidad: mo[i],
      muertes: mu[i],
    });
  }

  res.send("ok");
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
const dropAll = async (req, res) => {
  //VISUALIZAR

  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  await Covid.remove((err, dataEncontrada) => {
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
          status: "Usuarios encontrados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
};
module.exports = { control, createData, showData, dropAll };
