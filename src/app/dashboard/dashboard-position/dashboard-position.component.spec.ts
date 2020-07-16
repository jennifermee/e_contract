import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPositionComponent } from './dashboard-position.component';

describe('DashboardPositionComponent', () => {
  let component: DashboardPositionComponent;
  let fixture: ComponentFixture<DashboardPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
