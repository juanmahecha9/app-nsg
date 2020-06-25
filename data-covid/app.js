//Requerir el servidor
const app = require("./server/server");
require("./mongoDB/database");
require("./app/app.scraping");
//Iniciar el servidor como una funcion asincrona
//starting the server
app.listen(app.get("port"), app.get("bind"), () => {
  console.log("Server on port ", app.get("port"));
  console.log("Bind", app.get("bind"));
  console.log("Servidor: Conectado");
  console.log("************");
});
