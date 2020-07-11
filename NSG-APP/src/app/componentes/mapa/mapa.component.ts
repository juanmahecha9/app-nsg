import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';
import { AttrAst } from '@angular/compiler';

declare global {
  interface JQuery {
    mapael(map: any): JQuery;
  }
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    
    /* Definicion del mapa con el uso de la libreria de mapel de jquery */
    $('.container').mapael({
      map: {
        name: 'world_countries',
      //  width: 850
      },
      zoom: {
        enabled: true,
        maxLevel: 100,
      },
    });
    $('li').hover(function () {
      var id = $(this).attr('id');
      var options1 = { areas: {} };
      options1.areas[id] = {
        attrs: {
          fill: '#91b029',
        },
      };
      $('.container').trigger('update', [{ mapOptions: options1 }]);
    });
  }
}
