import { TestBed } from '@angular/core/testing';

import { EditorPdfService } from './editor-pdf.service';

describe('EditorPdfService', () => {
  let service: EditorPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
