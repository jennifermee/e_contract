import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-information',
  templateUrl: './contract-information.component.html',
  styleUrls: ['./contract-information.component.scss']
})
export class ContractInformationComponent implements OnInit {
  sidebar: any = 'contract_information';
  constructor() { }

  ngOnInit(): void {
  }

}
