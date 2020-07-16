import { Component, OnInit } from '@angular/core';
import { ContractCancellationService } from './contract-cancellation.service';

@Component({
  selector: 'app-contract-cancellation',
  templateUrl: './contract-cancellation.component.html',
  styleUrls: ['./contract-cancellation.component.scss']
})
export class ContractCancellationComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  constructor(
    private contractCancellationService: ContractCancellationService
  ) { }

  ngOnInit(): void {
  }


  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.contractCancellationService.change.show) {
      this.show = this.contractCancellationService.show;
      this.contractCancellationService.setChange('show', false);
    }
    if (this.contractCancellationService.change.html) {
      this.htmlBody = this.contractCancellationService.htmlBody;
      this.contractCancellationService.setChange('html', false);
    }
    if (this.contractCancellationService.change.state) {
      this.state = this.contractCancellationService.getState();
      this.contractCancellationService.setChange('state', false);
    }
  }

  closeModal() {
    this.contractCancellationService.close();
  }

  exportDataTable() {
    this.contractCancellationService.close();
  }

  onClickBtn(btn: any) {
    this.contractCancellationService[btn].func();
  }

}
