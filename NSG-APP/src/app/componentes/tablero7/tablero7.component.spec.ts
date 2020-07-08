import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero7Component } from './tablero7.component';

describe('Tablero7Component', () => {
  let component: Tablero7Component;
  let fixture: ComponentFixture<Tablero7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
