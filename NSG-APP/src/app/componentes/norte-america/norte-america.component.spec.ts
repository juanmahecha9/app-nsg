import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorteAmericaComponent } from './norte-america.component';

describe('NorteAmericaComponent', () => {
  let component: NorteAmericaComponent;
  let fixture: ComponentFixture<NorteAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorteAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorteAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
