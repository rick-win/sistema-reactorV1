import { TestBed } from '@angular/core/testing';

import { SensorReadingGestorService } from './sensor-reading-gestor.service';

describe('SensorReadingGestorService', () => {
  let service: SensorReadingGestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorReadingGestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
