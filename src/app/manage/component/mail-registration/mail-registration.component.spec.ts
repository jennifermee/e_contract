import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailRegistrationComponent } from './mail-registration.component';

describe('MailRegistrationComponent', () => {
  let component: MailRegistrationComponent;
  let fixture: ComponentFixture<MailRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
