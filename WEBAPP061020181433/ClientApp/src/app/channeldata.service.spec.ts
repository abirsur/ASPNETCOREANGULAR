import { TestBed } from '@angular/core/testing';

import { ChanneldataService } from './channeldata.service';

describe('ChanneldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChanneldataService = TestBed.get(ChanneldataService);
    expect(service).toBeTruthy();
  });
});
