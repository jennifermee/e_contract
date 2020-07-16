import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCancellationComponent } from './contract-cancellation.component';

describe('ContractCancellationComponent', () => {
  let component: ContractCancellationComponent;
  let fixture: ComponentFixture<ContractCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
