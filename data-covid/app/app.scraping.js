const request = require("request"),
  cheerio = require("cheerio"),
  fs = require("fs");

const URL = "https://www.bbc.com/mundo/noticias-51705060";

let arreglo = [];
const resultado = request(URL, function (error, response, body) {
  if (error) {
    return console.error("Problema...");
  }

  let $ = cheerio.load(body);

  $(".gel-brevier").each(function () {
    //Paises
    // modificar los datos captados de los paises para que sean visibles como vector
    let pais = $(this).find(".c__r").text().trim().replace(/\s\s+/g, "' ,'");

    //Generar un vector
    pais = pais.replace(/\'/g,'')
    pais = pais.split(",");

    //Arreglar el primer dato del vector
    let pais1 = pais[0]; // Dato 1 del vector
    let dato1 = "";
    let datoN1 = dato1.concat(pais1); //nuevo dato concatenado
    pais[0] = datoN1; // asignar el nuevo valor

    //Areglar el ultimo dato del vector
    //tamaño del vector
    item = pais.length;
    let pais2 = pais[item - 1];
    let dato2 = "";
    let datoN2 = pais2.concat(dato2);
    pais[item - 1] = datoN2;

    //Muertes
    let muertes = $(this).find(".c__c--d").text().trim().replace(/\s\s+/g, ",");
    //volver los datos un vector
    muertes = muertes.split(",");
    for (i = 0; i < muertes.length; i++) {
      muertes[i] = muertes[i].replace(/\./g,'')
      muertes[i] = parseInt(muertes[i]);
    } 

    //Mortalidad
    let mortalidad = $(this)
      .find(".c__c--dr")
      .text()
      .trim()
      .replace(/\s\s+/g, "-");
    mortalidad = mortalidad.replace(/,/g, ".");
    mortalidad = mortalidad.replace(/-/g, ",");
    mortalidad = mortalidad.split(",");
    for (i = 0; i < mortalidad.length; i++) {
      mortalidad[i] = parseFloat(mortalidad[i]);
    } 

    //Casos
    let casos = $(this).find(".c__c--t").text().trim().replace(/\s\s+/g, ",");
    casos = casos.split(",");
    for (i = 0; i < casos.length; i++) {
      casos[i] = casos[i].replace(/\./g,'')
      casos[i] = parseInt(casos[i]);
    } 

    //Datos finales
    //Guardar los datos en un objeto

    let obj = {};
    // == //
    for (i = 0; i < pais.length; i++) {
      if (mortalidad[i] == null) {
        mortalidad[i] = 0.0;
      }
      obj[i] = {
        indicador: i + 1,
        pais: pais[i],
        casos: casos[i],
        mortalidad: mortalidad[i],
        muertes: muertes[i],
      };
    }

    arreglo.push(JSON.stringify(obj));

    fs.writeFile("app/covid-19/datos.json", arreglo, function (err) {
      if (err) {
        // console.log(err);
      } else {
        //  console.log("success");
      }
    });
  });
});

const message = () => {
  console.log("Datos covid-19: conectado");
};