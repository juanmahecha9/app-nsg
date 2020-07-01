import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDatosCovidComponent } from './audio-datos-covid.component';

describe('AudioDatosCovidComponent', () => {
  let component: AudioDatosCovidComponent;
  let fixture: ComponentFixture<AudioDatosCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioDatosCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioDatosCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
