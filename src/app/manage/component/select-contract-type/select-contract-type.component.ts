import { Component, OnInit } from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faSign } from '@fortawesome/free-solid-svg-icons/faSign';
import { faBlender } from '@fortawesome/free-solid-svg-icons/faBlender';

@Component({
  selector: 'app-select-contract-type',
  templateUrl: './select-contract-type.component.html',
  styleUrls: ['./select-contract-type.component.scss']
})
export class SelectContractTypeComponent implements OnInit {
  sidebar: any = '';
  faHandshake = faHandshake;
  faFileSignature = faFileSignature;
  faSign = faSign;
  faBlender = faBlender;
  constructor() { }

  ngOnInit(): void {
  }

}
