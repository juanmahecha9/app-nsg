import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioMapaComponent } from './audio-mapa.component';

describe('AudioMapaComponent', () => {
  let component: AudioMapaComponent;
  let fixture: ComponentFixture<AudioMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
