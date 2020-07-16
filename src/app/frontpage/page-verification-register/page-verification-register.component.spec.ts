import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVerificationRegisterComponent } from './page-verification-register.component';

describe('PageVerificationRegisterComponent', () => {
  let component: PageVerificationRegisterComponent;
  let fixture: ComponentFixture<PageVerificationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVerificationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVerificationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
