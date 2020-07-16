import { TestBed } from '@angular/core/testing';

import { ElectronicContractDetailsService } from './electronic-contract-details.service';

describe('ElectronicContractDetailsService', () => {
  let service: ElectronicContractDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicContractDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
