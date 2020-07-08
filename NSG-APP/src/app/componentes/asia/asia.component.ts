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
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.scss']
})
export class AsiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Definicion del mapa con el uso de la libreria de mapel de jquery */
    $(".container").mapael({
      map: {
        name: "world_countries",
      },
      zoom: {
        maxLevel: 10
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
