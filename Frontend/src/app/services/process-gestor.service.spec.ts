import { TestBed } from '@angular/core/testing';

import { ProcessGestorService } from './process-gestor.service';

describe('ProcessGestorService', () => {
  let service: ProcessGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
