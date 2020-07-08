import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
//import 'jquery-mapael/js/maps/norte_america.js';
import '../../../assets/maps/norte_america.js'
import { AttrAst } from '@angular/compiler';

declare global {
  interface JQuery {
    mapael(map: any): JQuery;
  }
}

@Component({
  selector: 'app-norte-america',
  templateUrl: './norte-america.component.html',
  styleUrls: ['./norte-america.component.scss']
})
export class NorteAmericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
   
    /* Definicion del mapa con el uso de la libreria de mapel de jquery */
    $(".container").mapael({
      map: {
        name: "norte_america",
        width: 450
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