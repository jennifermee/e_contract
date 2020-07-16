import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingElectronicComponent } from './creating-electronic.component';

describe('CreatingElectronicComponent', () => {
  let component: CreatingElectronicComponent;
  let fixture: ComponentFixture<CreatingElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingElectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
