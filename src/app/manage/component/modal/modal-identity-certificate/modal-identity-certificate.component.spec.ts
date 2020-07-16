import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdentityCertificateComponent } from './modal-identity-certificate.component';

describe('ModalIdentityCertificateComponent', () => {
  let component: ModalIdentityCertificateComponent;
  let fixture: ComponentFixture<ModalIdentityCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIdentityCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIdentityCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
