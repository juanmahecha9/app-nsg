import { Component, OnInit } from '@angular/core';
declare const alerta3:any;
@Component({
  selector: 'app-tablero4',
  templateUrl: './tablero4.component.html',
  styleUrls: ['./tablero4.component.scss']
})
export class Tablero4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  my() {
    alerta3();
  }
}
