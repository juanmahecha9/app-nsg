//requeir el modelo del usuario
const User = require("../models/user.model");
//correo
const correoV = require("../helpers/registro");
//token de autenticacion
const jwt = require("jsonwebtoken");

//prueba del servidor
function prueba(req, res) {
  res.send("Hola Juan...");
}

//Creacion de los procesos de ingreso del usuario a la DB
const createData = async (req, res) => {
  // CREAR
  const {
    name,
    email,
    password,
    ocupation,
    income,
    pet,
    adress,
    phone,
  } = req.body; //parametros que el envian solicitudes
  const data = new User({
    name,
    email,
    password,
    ocupation,
    income,
    pet,
    adress,
    phone,
  }); // Acceder al modelo de mongoDB y se guarda en un avariable para acceder a cada key del objeto
  const correo = data.email;
  const nombre = data.name;

  await data.save((err, newData) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!newData) {
        res.status(200).send({
          message: "No fue posible realizar el registro",
          statusCode: 400,
        });
      } else {
        const token = jwt.sign({ _id: newData._id }, "secretkey");
        res.status(200).send({
          status: "Nueva data",
          token: token,
          producto: newData,
          statusCode: 200,
        });

        //
        correoV(correo, nombre);
        //
      }
    }
  }); //Guardar
};

function showData(req, res) {
  //VISUALIZAR
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  User.find((err, dataEncontrada) => {
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

function upgradeData(req, res) {
  //Actualizar
  let productosId = req.params.id;
  //incicar que uno de los parametros  para modificar va a ser el id
  // variable donde almacenar estos datos:
  let nuevosDatos = req.body;
  //control es la variale del modelo Buscar el objeto por el ID y actualizar
  //encontrar producto id o parametro, en conjutno con los nuevos datos, se crea una funcion error o actualizado
  //ese id lo creo mongo...
  User.findByIdAndUpdate(productosId, nuevosDatos, (err, dataActualizada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataActualizada) {
        res.status(200).send({
          message: "No fue posible actualizar",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Usuarios actualizado",
          producto: nuevosDatos,
          statusCode: 200,
        });
      }
    }
  });
}

function delateData(req, res) {
  //eliminar
  let dataId = req.params.id;
  //obtener el id del objeto

  //permite encontrar el id buscado y lo elimina del registro
  User.findByIdAndDelete(dataId, (err, dataEliminada) => {
    //base de datos, encuentra el id del producto, posee parametros de identificacion del id, error y el producto eliminado
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEliminada) {
        res.status(200).send({
          message: "No fue posible eliminar",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Usuario eliminado",
          producto: dataEliminada,
          statusCode: 200,
        });
      }
    }
  });
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("No registrado");

  if (user) {
    //Traer el metodo creado
    user.compararPassword(password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch == true) {
        const token = jwt.sign({ _id: user._id }, "secretkey");
        return res.status(200).send({
          value: "Contraseña Valida",
          token: token,
        });
      }
      if (isMatch != true) return res.status(401).send("Contraseña Invalida");
    });
  }
};

const private = (req, res) => {
  res.json([
    {
      nombre: "Juan",
      apellido: "Mahecha",
    },
    {
      nombre: "Juan David",
      apellido: "Mahecha Cruz",
    },
  ]);
};

function verifyToken(req, res, next) {
  //crear la cabecera de autenticacion
  if (!req.headers.authorization) {
    return res.status(401).send("No autorizado");
  }
  const token = req.headers.authorization.split(" ")[1];
  if (token == "null") {
    return res.status(401).sen("No autorizado");
  }
  const data = jwt.verify(token, "secretkey");
  req.userId = data._id;
  next();
  git;
}

//borrar todos los datos de una coleccion de mongo.....
const dropAll = async (req, res) => {
  //VISUALIZAR

  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  await User.remove((err, dataEncontrada) => {
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

module.exports = {
  prueba,
  createData,
  showData,
  upgradeData,
  delateData,
  login,
  private,
  verifyToken,
  dropAll,
};
