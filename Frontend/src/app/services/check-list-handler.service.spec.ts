import { TestBed } from '@angular/core/testing';

import { CheckListHandlerService } from './check-list-handler.service';

describe('CheckListHandlerService', () => {
  let service: CheckListHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckListHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
