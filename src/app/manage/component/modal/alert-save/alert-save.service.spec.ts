import { TestBed } from '@angular/core/testing';

import { AlertSaveService } from './alert-save.service';

describe('AlertSaveService', () => {
  let service: AlertSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
