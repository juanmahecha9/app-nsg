import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatosCovidComponent } from './lista-datos-covid.component';

describe('ListaDatosCovidComponent', () => {
  let component: ListaDatosCovidComponent;
  let fixture: ComponentFixture<ListaDatosCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDatosCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDatosCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
