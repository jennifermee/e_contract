import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSaveNameTemplateComponent } from './alert-save-name-template.component';

describe('AlertSaveNameTemplateComponent', () => {
  let component: AlertSaveNameTemplateComponent;
  let fixture: ComponentFixture<AlertSaveNameTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSaveNameTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSaveNameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
