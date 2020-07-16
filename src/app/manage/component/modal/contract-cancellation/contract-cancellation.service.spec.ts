import { TestBed } from '@angular/core/testing';

import { ContractCancellationService } from './contract-cancellation.service';

describe('ContractCancellationService', () => {
  let service: ContractCancellationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractCancellationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
