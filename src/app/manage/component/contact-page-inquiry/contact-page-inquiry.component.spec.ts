import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageInquiryComponent } from './contact-page-inquiry.component';

describe('ContactPageInquiryComponent', () => {
  let component: ContactPageInquiryComponent;
  let fixture: ComponentFixture<ContactPageInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
