import { TestBed } from '@angular/core/testing';

import { AuthFireService } from './auth-fire.service';

describe('AuthFireService', () => {
  let service: AuthFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
