import { Component, OnInit } from '@angular/core';
declare const alerta1:any;
@Component({
  selector: 'app-tablero2',
  templateUrl: './tablero2.component.html',
  styleUrls: ['./tablero2.component.scss']
})
export class Tablero2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  my(){
    new alerta1();
  }
}
