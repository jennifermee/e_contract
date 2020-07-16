import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSignatureComponent } from './modal-add-signature.component';

describe('ModalAddSignatureComponent', () => {
  let component: ModalAddSignatureComponent;
  let fixture: ComponentFixture<ModalAddSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
