import { TestBed } from '@angular/core/testing';

import { TvserviceService } from './tvservice.service';

describe('TvserviceService', () => {
  let service: TvserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
