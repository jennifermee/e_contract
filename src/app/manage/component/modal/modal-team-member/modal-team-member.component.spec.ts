import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTeamMemberComponent } from './modal-team-member.component';

describe('ModalTeamMemberComponent', () => {
  let component: ModalTeamMemberComponent;
  let fixture: ComponentFixture<ModalTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTeamMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
