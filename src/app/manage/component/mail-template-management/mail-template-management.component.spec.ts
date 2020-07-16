import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTemplateManagementComponent } from './mail-template-management.component';

describe('MailTemplateManagementComponent', () => {
  let component: MailTemplateManagementComponent;
  let fixture: ComponentFixture<MailTemplateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTemplateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTemplateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
