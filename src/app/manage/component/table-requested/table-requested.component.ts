import { Component, OnInit } from '@angular/core';
import { AlertConfirmService } from '../modal/alert-confirm/alert-confirm.service';
import { ElectronicContractDetailsService } from '../modal/electronic-contract-details/electronic-contract-details.service';
import { ContractCancellationService } from '../modal/contract-cancellation/contract-cancellation.service';

import { faSearch, faTimes, faTv, faRedo, faExclamationCircle, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-requested',
  templateUrl: './table-requested.component.html',
  styleUrls: ['./table-requested.component.scss']
})
export class TableRequestedComponent implements OnInit {
  faTv = faTv;
  faRedo = faRedo;
  faExclamationCircle = faExclamationCircle;
  faDownload = faDownload;
  tpOne: any;
  constructor(
    private alertConfirmService: AlertConfirmService,
    private electronicContractDetailsService: ElectronicContractDetailsService,
    private contractCancellationService: ContractCancellationService
  ) { }

  ngOnInit(): void {
    this.tpOne = this.inDataOne();
  }
  inDataOne() {
    return [{
      action: "완료",
      name: "표준근로계약서 2020",
      recipient: "김용선",
      sender: "진혜연",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      recipient: "진혜연",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      recipient: "조아라",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      recipient: "진혜연",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      recipient: "조아라",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      recipient: "진혜연",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      recipient: "조아라",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    }]
  }

  onClickRedo() {
    this.alertConfirmService.open(
      '서명요청은 1회 가능합니다.<br>재전송을 하시겠습니까?',
      '두 명 이상의 계약자(수신자)에게 보내진 계약서의 경우, 선택된 계약자(수신자)에게만 서명요청 메세지가 전달됩니다.',
      {
        func: () => {
          this.alertConfirmService.close();
        }
      },
      {
        func: () => {
          this.alertConfirmService.close();
        }
      }
    );
  }

  onClickExclamation(){
    this.electronicContractDetailsService.open();
  }

  onClickContractCancellation() {
    this.contractCancellationService.open(
      {
        func: () => {
          this.contractCancellationService.close();
        }
      },{
        func: () => {
          this.contractCancellationService.close();
        }
      }
    );
  }
}
