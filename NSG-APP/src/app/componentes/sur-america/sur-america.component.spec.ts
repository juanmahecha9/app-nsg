import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurAmericaComponent } from './sur-america.component';

describe('SurAmericaComponent', () => {
  let component: SurAmericaComponent;
  let fixture: ComponentFixture<SurAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
