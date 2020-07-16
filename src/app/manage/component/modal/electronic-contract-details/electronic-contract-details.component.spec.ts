import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicContractDetailsComponent } from './electronic-contract-details.component';

describe('ElectronicContractDetailsComponent', () => {
  let component: ElectronicContractDetailsComponent;
  let fixture: ComponentFixture<ElectronicContractDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicContractDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
