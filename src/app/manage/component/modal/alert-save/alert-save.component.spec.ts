import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSaveComponent } from './alert-save.component';

describe('AlertSaveComponent', () => {
  let component: AlertSaveComponent;
  let fixture: ComponentFixture<AlertSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
