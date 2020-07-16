import { TestBed } from '@angular/core/testing';

import { AlertDeleteService } from './alert-delete.service';

describe('AlertDeleteService', () => {
  let service: AlertDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
