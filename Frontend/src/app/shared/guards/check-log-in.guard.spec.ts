import { TestBed } from '@angular/core/testing';

import { CheckLogInGuard } from './check-log-in.guard';

describe('CheckLogInGuard', () => {
  let guard: CheckLogInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLogInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
