import { TestBed } from '@angular/core/testing';

import { SubmitCertificateService } from './submit-certificate.service';

describe('SubmitCertificateService', () => {
  let service: SubmitCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
