import { TestBed } from '@angular/core/testing';

import { DatosCovidService } from './datos-covid.service';

describe('DatosCovidService', () => {
  let service: DatosCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
