import { TestBed } from '@angular/core/testing';

import { ReportsManagerService } from './reports-manager.service';

describe('ReportsManagerService', () => {
  let service: ReportsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
