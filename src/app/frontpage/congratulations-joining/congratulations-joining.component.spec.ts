import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationsJoiningComponent } from './congratulations-joining.component';

describe('CongratulationsJoiningComponent', () => {
  let component: CongratulationsJoiningComponent;
  let fixture: ComponentFixture<CongratulationsJoiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratulationsJoiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationsJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
