import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCertificateComponent } from './submit-certificate.component';

describe('SubmitCertificateComponent', () => {
  let component: SubmitCertificateComponent;
  let fixture: ComponentFixture<SubmitCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
