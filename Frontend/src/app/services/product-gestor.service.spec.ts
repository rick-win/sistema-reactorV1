import { TestBed } from '@angular/core/testing';

import { ProductGestorService } from './product-gestor.service';

describe('ProductGestorService', () => {
  let service: ProductGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
