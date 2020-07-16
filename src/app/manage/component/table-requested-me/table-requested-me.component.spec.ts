import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestedMeComponent } from './table-requested-me.component';

describe('TableRequestedMeComponent', () => {
  let component: TableRequestedMeComponent;
  let fixture: ComponentFixture<TableRequestedMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRequestedMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRequestedMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
