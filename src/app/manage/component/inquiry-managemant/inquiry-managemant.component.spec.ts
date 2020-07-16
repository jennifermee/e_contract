import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryManagemantComponent } from './inquiry-managemant.component';

describe('InquiryManagemantComponent', () => {
  let component: InquiryManagemantComponent;
  let fixture: ComponentFixture<InquiryManagemantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryManagemantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryManagemantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
