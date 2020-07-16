import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsViewPdfComponent } from './tools-view-pdf.component';

describe('PdfComponent', () => {
  let component: ToolsViewPdfComponent;
  let fixture: ComponentFixture<ToolsViewPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsViewPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsViewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
