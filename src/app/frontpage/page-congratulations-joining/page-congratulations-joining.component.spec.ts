import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCongratulationsJoiningComponent } from './page-congratulations-joining.component';

describe('PageCongratulationsJoiningComponent', () => {
  let component: PageCongratulationsJoiningComponent;
  let fixture: ComponentFixture<PageCongratulationsJoiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCongratulationsJoiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCongratulationsJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
