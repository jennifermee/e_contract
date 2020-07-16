import { Component, OnInit } from '@angular/core';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleRight';

@Component({
  selector: 'app-dashboard-role',
  templateUrl: './dashboard-role.component.html',
  styleUrls: ['./dashboard-role.component.scss']
})
export class DashboardRoleComponent implements OnInit {
  datas: any;
  faReply = faReply;
  faArrowAltCircleRight = faArrowAltCircleRight;
  faPen = faPen;
  constructor() { }

  ngOnInit(): void {
    this.datas = [
      {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        constructor: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }
    ]
  }

}
