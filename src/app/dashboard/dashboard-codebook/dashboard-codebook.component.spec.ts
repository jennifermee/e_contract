import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCodebookComponent } from './dashboard-codebook.component';

describe('DashboardCodebookComponent', () => {
  let component: DashboardCodebookComponent;
  let fixture: ComponentFixture<DashboardCodebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCodebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCodebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
