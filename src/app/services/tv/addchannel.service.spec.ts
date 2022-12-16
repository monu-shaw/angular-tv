import { TestBed } from '@angular/core/testing';

import { AddchannelService } from './addchannel.service';

describe('AddchannelService', () => {
  let service: AddchannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddchannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
