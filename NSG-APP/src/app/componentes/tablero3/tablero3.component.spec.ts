import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero3Component } from './tablero3.component';

describe('Tablero3Component', () => {
  let component: Tablero3Component;
  let fixture: ComponentFixture<Tablero3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
