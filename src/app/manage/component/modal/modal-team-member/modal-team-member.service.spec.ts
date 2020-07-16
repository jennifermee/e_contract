import { TestBed } from '@angular/core/testing';

import { ModalTeamMemberService } from './modal-team-member.service';

describe('ModalTeamMemberService', () => {
  let service: ModalTeamMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalTeamMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
