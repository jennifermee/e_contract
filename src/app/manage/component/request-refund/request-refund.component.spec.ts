import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRefundComponent } from './request-refund.component';

describe('RequestRefundComponent', () => {
  let component: RequestRefundComponent;
  let fixture: ComponentFixture<RequestRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
