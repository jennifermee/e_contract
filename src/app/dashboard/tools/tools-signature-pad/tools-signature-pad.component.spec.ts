import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSignaturePadComponent } from './tools-signature-pad.component';

describe('ToolsSignaturePadComponent', () => {
  let component: ToolsSignaturePadComponent;
  let fixture: ComponentFixture<ToolsSignaturePadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsSignaturePadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsSignaturePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
