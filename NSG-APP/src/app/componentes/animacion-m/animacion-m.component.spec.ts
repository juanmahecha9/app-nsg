import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionMComponent } from './animacion-m.component';

describe('AnimacionMComponent', () => {
  let component: AnimacionMComponent;
  let fixture: ComponentFixture<AnimacionMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacionMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
