import { TestBed } from '@angular/core/testing';

import { ComisionTecnicaInvalidezService } from './comision-tecnica-invalidez.service';

describe('ComisionTecnicaInvalidezService', () => {
  let service: ComisionTecnicaInvalidezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComisionTecnicaInvalidezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
