import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicContractAuthenticationCompletedComponent } from './electronic-contract-authentication-completed.component';

describe('ElectronicContractAuthenticationCompletedComponent', () => {
  let component: ElectronicContractAuthenticationCompletedComponent;
  let fixture: ComponentFixture<ElectronicContractAuthenticationCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicContractAuthenticationCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicContractAuthenticationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
