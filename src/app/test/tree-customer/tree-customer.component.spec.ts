import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCustomerComponent } from './tree-customer.component';

describe('TreeCustomerComponent', () => {
  let component: TreeCustomerComponent;
  let fixture: ComponentFixture<TreeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
