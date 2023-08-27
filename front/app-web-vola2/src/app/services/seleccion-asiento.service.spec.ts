import { TestBed } from '@angular/core/testing';

import { SeleccionAsientoService } from './seleccion-asiento.service';

describe('SeleccionAsientoService', () => {
  let service: SeleccionAsientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionAsientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
