import { Component, OnInit } from '@angular/core';
declare const colombia: any;
@Component({
  selector: 'app-tablero3',
  templateUrl: './tablero3.component.html',
  styleUrls: ['./tablero3.component.scss'],
})
export class Tablero3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  my() {
    colombia();
  }
}
