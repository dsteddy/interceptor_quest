import { TestBed } from '@angular/core/testing';

import { DoGetService } from './do-get.service';

describe('DoGetService', () => {
  let service: DoGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
