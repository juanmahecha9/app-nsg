import { Component, OnInit } from '@angular/core';
declare const alerta:any;
@Component({
  selector: 'app-tablero7',
  templateUrl: './tablero7.component.html',
  styleUrls: ['./tablero7.component.scss']
})
export class Tablero7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
my(){
  alerta();
}
}
