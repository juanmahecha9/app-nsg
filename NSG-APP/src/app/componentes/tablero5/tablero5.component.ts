import { Component, OnInit } from '@angular/core';
declare const egipto:any;
@Component({
  selector: 'app-tablero5',
  templateUrl: './tablero5.component.html',
  styleUrls: ['./tablero5.component.scss']
})
export class Tablero5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  my() {
    egipto();
  }
}
