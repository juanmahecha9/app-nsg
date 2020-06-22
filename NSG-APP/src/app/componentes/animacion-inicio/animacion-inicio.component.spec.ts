import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionInicioComponent } from './animacion-inicio.component';

describe('AnimacionInicioComponent', () => {
  let component: AnimacionInicioComponent;
  let fixture: ComponentFixture<AnimacionInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
