import { TestBed } from '@angular/core/testing';

import { HopperCheckService } from './hopper-check.service';

describe('HopperCheckService', () => {
  let service: HopperCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HopperCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
