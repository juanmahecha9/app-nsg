import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/sur_america.js';
import { AttrAst } from '@angular/compiler';

declare global {
  interface JQuery {
    mapael(map: any): JQuery;
  }
}
@Component({
  selector: 'app-sur-america',
  templateUrl: './sur-america.component.html',
  styleUrls: ['./sur-america.component.scss'],
})
export class SurAmericaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /* Definicion del mapa con el uso de la libreria de mapel de jquery */
    $('.container').mapael({
      map: {
        name: 'sur_america',
        width: 600,
        
      },
      zoom: {
        maxLevel: 10,
      },
    });
    $('div').hover(function () {
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
