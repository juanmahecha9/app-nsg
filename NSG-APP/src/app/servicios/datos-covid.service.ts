import { Injectable } from '@angular/core';

/* Solicitar los datos de http, httpClient, el cual trae los metodos http y el httpHeaders genera las rutas */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosCovidService {
  /* Ruta de la api creada para los datos del covid */
 url = 'https://covidnsg.herokuapp.com';
//url = 'http://localhost:3100'
  
/* Crear una variable de tipo privada para la informacion adquirida */
  constructor(private http: HttpClient) {}

  /* Conexion entre el front y el backend para poder cceder al servicio */
  createData(newData) {
    const params = JSON.stringify(newData);
    /* Convierte la informacion a un archivo json */
    const options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
    };
    /* Se crea una contante la cual sirve para indicar que la informacion que se enviara es de tipo json */

    return this.http
      .post(
        this.url + '/data', //se le indica la ruta de la api
        params, //se indicanlos datos que se envian
        options // se indica que son datos en forma de json
        /*  se retorna el objeto el cual  por medio de http se le encia por medtodo post */
      )
      .pipe(
        (res) => res
        
              ); /* convierte datos de entrea en datos de alida para que llegue a la api en forma de respuesta y nos trae la respuesta de nuestra api */
  }

  /* Mostrar los contenidos de la base de datos */
  showData() {
    /* retornar con el motodo get */
    return this.http.get(this.url + '/data').pipe((res) => res);
  }

 
}
