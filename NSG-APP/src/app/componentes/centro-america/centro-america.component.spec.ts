import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAmericaComponent } from './centro-america.component';

describe('CentroAmericaComponent', () => {
  let component: CentroAmericaComponent;
  let fixture: ComponentFixture<CentroAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
