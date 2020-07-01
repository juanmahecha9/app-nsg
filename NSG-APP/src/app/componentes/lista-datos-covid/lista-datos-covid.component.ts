import { Component, OnInit } from '@angular/core';
/* importar el modelo y el servicio */
import { producto } from '../../modelos/datos-covid';
import { DatosCovidService } from '../../servicios/datos-covid.service';

@Component({
  selector: 'app-lista-datos-covid',
  templateUrl: './lista-datos-covid.component.html',
  styleUrls: ['./lista-datos-covid.component.scss'],
})
export class ListaDatosCovidComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */

  
  constructor(private service: DatosCovidService) {
    /* Instanciar el modelo de información */
   // this.Producto = new producto();
  }

  ngOnInit(): void {
   this.mostrarProducto();
    // location.reload();
  }
  
  
  /* Crear el metodo */
  mostrarProducto() {
    /* Nos suscribimos al servicio que creamos y se le indica que nos devuelva una respuesta cualquiera según el caso */
    this.service.showData().subscribe((response: any) => {
      this.productosEncontrados = response.producto;
      /* el contador for nos muestra como respuesta cada producto */
    },
      (error) => {
        var errormensaje = <any>error;
        /* el error se guarda en una variable para luego comparla y mostrarla */
        if (errormensaje != null) {
          console.log(error);
          /* si el error es diferente a null, que muestre el error en la consola del navegador */
        }
      }
    )
  }


}
