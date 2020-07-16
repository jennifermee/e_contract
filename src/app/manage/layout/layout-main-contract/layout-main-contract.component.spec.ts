import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMainContractComponent } from './layout-main-contract.component';

describe('LayoutMainContractComponent', () => {
  let component: LayoutMainContractComponent;
  let fixture: ComponentFixture<LayoutMainContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMainContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMainContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
