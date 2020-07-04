import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroPruebaComponent } from './tablero-prueba.component';

describe('TableroPruebaComponent', () => {
  let component: TableroPruebaComponent;
  let fixture: ComponentFixture<TableroPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
