import { Component, OnInit } from '@angular/core';
import { ElectronicContractDetailsService } from './electronic-contract-details.service'
@Component({
  selector: 'app-electronic-contract-details',
  templateUrl: './electronic-contract-details.component.html',
  styleUrls: ['./electronic-contract-details.component.scss']
})
export class ElectronicContractDetailsComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  constructor(
    private electronicContractDetailsService: ElectronicContractDetailsService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.electronicContractDetailsService.change.show) {
      this.show = this.electronicContractDetailsService.show;
      this.electronicContractDetailsService.setChange('show', false);
    }
    if (this.electronicContractDetailsService.change.html) {
      this.htmlBody = this.electronicContractDetailsService.htmlBody;
      this.electronicContractDetailsService.setChange('html', false);
    }
    if (this.electronicContractDetailsService.change.state) {
      this.state = this.electronicContractDetailsService.getState();
      this.electronicContractDetailsService.setChange('state', false);
    }
  }

  closeModal() {
    this.electronicContractDetailsService.close();
  }

  exportDataTable() {
    this.electronicContractDetailsService.close();
  }

  onClickBtn(btn: any) {
    this.electronicContractDetailsService[btn].func();
  }
}
