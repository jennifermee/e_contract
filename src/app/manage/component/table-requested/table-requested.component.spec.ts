import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestedComponent } from './table-requested.component';

describe('TableRequestedComponent', () => {
  let component: TableRequestedComponent;
  let fixture: ComponentFixture<TableRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
