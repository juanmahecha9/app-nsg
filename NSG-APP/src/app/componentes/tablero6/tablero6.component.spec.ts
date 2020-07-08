import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero6Component } from './tablero6.component';

describe('Tablero6Component', () => {
  let component: Tablero6Component;
  let fixture: ComponentFixture<Tablero6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
