import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import '../../../assets/maps/centro-america.js';
import { AttrAst } from '@angular/compiler';

declare global {
  interface JQuery {
    mapael(map: any): JQuery;
  }
}
@Component({
  selector: 'app-centro-america',
  templateUrl: './centro-america.component.html',
  styleUrls: ['./centro-america.component.scss']
})
export class CentroAmericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     /* Definicion del mapa con el uso de la libreria de mapel de jquery */
     $(".container").mapael({
      map: {
        name: "centro_america",
        width: 600,
      },
      zoom: {
        maxLevel: 10,
       
      },
    });
    $("div").hover(
      function () {
        var id = $(this).attr("id");
        var options1 = { areas: {} };
        options1.areas[id] = {
          attrs: {
            fill: "#ff1500",
          }
        };
        $(".container").trigger("update", [
          { mapOptions: options1, }
        ]);
      },
    );
  }

}
