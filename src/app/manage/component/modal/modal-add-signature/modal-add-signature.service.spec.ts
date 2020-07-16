import { TestBed } from '@angular/core/testing';

import { ModalAddSignatureService } from './modal-add-signature.service';

describe('ModalAddSignatureService', () => {
  let service: ModalAddSignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAddSignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
