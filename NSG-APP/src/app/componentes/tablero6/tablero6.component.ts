import { Component, OnInit } from '@angular/core';
declare const china: any;
@Component({
  selector: 'app-tablero6',
  templateUrl: './tablero6.component.html',
  styleUrls: ['./tablero6.component.scss']
})
export class Tablero6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  my() {
    china();
  }
}
