import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-management',
  templateUrl: './mail-management.component.html',
  styleUrls: ['./mail-management.component.scss']
})
export class MailManagementComponent implements OnInit {
  td: any;
  constructor() { }

  ngOnInit(): void {
    this.td = this.inntData();
  }
  inntData() {
    return [{
      people: '표준근로계약서'
    }, {
      people: '아르바이트 근로계약서'
    }, {
      people: '부동산 임대 계약서   '
    }];
  }
}
