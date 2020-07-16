import { Component, OnInit } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faTv } from '@fortawesome/free-solid-svg-icons/faTv';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-dashboard-position',
  templateUrl: './dashboard-position.component.html',
  styleUrls: ['./dashboard-position.component.scss']
})
export class DashboardPositionComponent implements OnInit {
  datas: any;
  faRedo = faRedo;
  faTv = faTv;
  faExclamationCircle = faExclamationCircle;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
    this.datas = [
      {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }, {
        state: '보냄',
        name: '2020 근로 및 연봉 계약서 2020/01/01 부터 2020/12/31 까지 (일반 직원용) 연봉 테이블 A 형',
        rca: {
          img: 'https://picsum.photos/200/200',
          recipient: '아이소프트>개발>개발 1팀',
          name: '최명철 (대리)'
        },
        sender: {
          img: 'https://picsum.photos/200/200',
          position: '업무대행 업체',
          name: '이시민 (대리)'
        },
        sent_date: '2020/03/30 (월) 오후 09:12',
        last_update: '2020/03/31 (화) 오전 09:12',
      }
    ]
  }



}
