import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
/* importar el modelo y el servicio */
import { producto } from './modelos/datos-covid';
import { DatosCovidService } from './servicios/datos-covid.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */

  constructor(
    public auth: AuthService,
    private router: Router,
    private service: DatosCovidService
  ) {
    this.Producto = new producto();
  }

  ngOnInit(): void {$(document).ready(function(){
    $('.toggle').on('click', function(){
      $('.sidebar').toggleClass('show');
    }); 
  });
  $(document).ready(function(){
    $('.toggle').on('click', function(){
      $('.container').toggleClass('slide');
    }); 
  });}

  cerrar() {
    this.auth.cerrarS();
    alert('Cerrar sesion');
  }
  
  cargar() {
    this.service.createData(this.Producto).subscribe((res: any) => {
      if (res.statusCode !== 200) {
        alert("Error, recarge de nuevo");
      } else {
        
      }
    });
  }
/* Crear el metodo */
  mostrarProducto() {
    /* Nos suscribimos al servicio que creamos y se le indica que nos devuelva una respuesta cualquiera según el caso */
    this.service.showData().subscribe((response: any) => {
      this.productosEncontrados = response.producto;
      alert('Recargando los datos')
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
    )}

}

