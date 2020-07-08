import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero4Component } from './tablero4.component';

describe('Tablero4Component', () => {
  let component: Tablero4Component;
  let fixture: ComponentFixture<Tablero4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
