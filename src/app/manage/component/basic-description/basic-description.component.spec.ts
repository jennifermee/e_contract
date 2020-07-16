import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDescriptionComponent } from './basic-description.component';

describe('BasicDescriptionComponent', () => {
  let component: BasicDescriptionComponent;
  let fixture: ComponentFixture<BasicDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
