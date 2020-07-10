import { Component, OnInit } from '@angular/core';
declare const belice:any;
@Component({
  selector: 'app-tablero1',
  templateUrl: './tablero1.component.html',
  styleUrls: ['./tablero1.component.scss']
})
export class Tablero1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  my(){
    new belice();
  }
}
