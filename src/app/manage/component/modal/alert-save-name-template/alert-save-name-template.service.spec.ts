import { TestBed } from '@angular/core/testing';

import { AlertSaveNameTemplateService } from './alert-save-name-template.service';

describe('AlertSaveNameTemplateService', () => {
  let service: AlertSaveNameTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSaveNameTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
