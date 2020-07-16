import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingRecipientsComponent } from './sending-recipients.component';

describe('SendingRecipientsComponent', () => {
  let component: SendingRecipientsComponent;
  let fixture: ComponentFixture<SendingRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
