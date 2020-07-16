import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTransferComponent } from './excel-transfer.component';

describe('ExcelTransferComponent', () => {
  let component: ExcelTransferComponent;
  let fixture: ComponentFixture<ExcelTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
