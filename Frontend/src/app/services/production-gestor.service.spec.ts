import { TestBed } from '@angular/core/testing';

import { ProductionGestorService } from './production-gestor.service';

describe('ProductionGestorService', () => {
  let service: ProductionGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
