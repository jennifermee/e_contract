import { TestBed } from '@angular/core/testing';

import { SendLinkService } from './send-link.service';

describe('SendLinkService', () => {
  let service: SendLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
