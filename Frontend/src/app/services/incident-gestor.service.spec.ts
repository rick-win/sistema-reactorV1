import { TestBed } from '@angular/core/testing';

import { IncidentGestorService } from './incident-gestor.service';

describe('IncidentGestorService', () => {
  let service: IncidentGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
