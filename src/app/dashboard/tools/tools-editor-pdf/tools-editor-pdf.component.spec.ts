import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsEditorPdfComponent } from './tools-editor-pdf.component';

describe('ToolsEditorPdfComponent', () => {
  let component: ToolsEditorPdfComponent;
  let fixture: ComponentFixture<ToolsEditorPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsEditorPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsEditorPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
