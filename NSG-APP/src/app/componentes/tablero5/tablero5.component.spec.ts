import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero5Component } from './tablero5.component';

describe('Tablero5Component', () => {
  let component: Tablero5Component;
  let fixture: ComponentFixture<Tablero5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
