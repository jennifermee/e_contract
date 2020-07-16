import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes, faTv, faRedo, faExclamationCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ContractCancellationService } from '../modal/contract-cancellation/contract-cancellation.service';

@Component({
  selector: 'app-table-requested-me',
  templateUrl: './table-requested-me.component.html',
  styleUrls: ['./table-requested-me.component.scss']
})
export class TableRequestedMeComponent implements OnInit {
  faTv = faTv;
  faRedo = faRedo;
  faExclamationCircle = faExclamationCircle;
  faDownload = faDownload;
  tpTwo: any;
  constructor(
    private contractCancellationService: ContractCancellationService
  ) { }

  ngOnInit(): void {
    this.tpTwo = this.inDataTwo();
  }
  inDataTwo() {
    return [{
      action: "완료",
      name: "표준근로계약서 2020",
      sender: "진혜연",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "아르바이트 근로계약서",
      sender: "조아라",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    },
    {
      action: "진행중",
      name: "부동산 임대계약서",
      sender: "김용선",
      creationDate: "2020/03/30 09:30:30",
      lastUpdate: "2020/03/30 09:30:30"
    }]
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
