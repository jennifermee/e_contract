import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipientsComponent } from './select-recipients.component';

describe('SelectRecipientsComponent', () => {
  let component: SelectRecipientsComponent;
  let fixture: ComponentFixture<SelectRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
