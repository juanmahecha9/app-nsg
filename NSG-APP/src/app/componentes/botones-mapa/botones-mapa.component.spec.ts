import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesMapaComponent } from './botones-mapa.component';

describe('BotonesMapaComponent', () => {
  let component: BotonesMapaComponent;
  let fixture: ComponentFixture<BotonesMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
