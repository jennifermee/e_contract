import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationRegisterComponent } from './verification-register.component';

describe('VerificationRegisterComponent', () => {
  let component: VerificationRegisterComponent;
  let fixture: ComponentFixture<VerificationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
