import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero8Component } from './tablero8.component';

describe('Tablero8Component', () => {
  let component: Tablero8Component;
  let fixture: ComponentFixture<Tablero8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablero8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
