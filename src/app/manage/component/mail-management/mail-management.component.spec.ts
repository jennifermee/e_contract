import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailManagementComponent } from './mail-management.component';

describe('MailManagementComponent', () => {
  let component: MailManagementComponent;
  let fixture: ComponentFixture<MailManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
