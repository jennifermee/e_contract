import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-refund',
  templateUrl: './request-refund.component.html',
  styleUrls: ['./request-refund.component.scss']
})
export class RequestRefundComponent implements OnInit {
  td: any;
  constructor() { }

  ngOnInit(): void {
    this.td = this.inData();
  }

  inData() {
    return [
      {
        registrationDate: '2020/04/23 13:14',
        question: '일번 조항에 나와 있는 내용에 문제가 있습니다…',
        state: '답변완료'
      },
      {
        registrationDate: '2020/04/23 13:14',
        question: '내용 확인 후 처리될 수 있도록…',
        state: '답변완료'
      },
      {
        registrationDate: '2020/04/23 13:14',
        question: '결제 취소가 가능할까요?',
        state: '문의'
      }
    ]
  }
}
