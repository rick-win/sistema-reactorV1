import { TestBed } from '@angular/core/testing';

import { CheckLogOutGuard } from './check-log-out.guard';

describe('CheckLogOutGuard', () => {
  let guard: CheckLogOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLogOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
