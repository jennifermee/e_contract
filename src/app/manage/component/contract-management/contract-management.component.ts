import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertConfirmService } from '../modal/alert-confirm/alert-confirm.service';
import { SidebarService } from '../sidebar/sidebar.service';

import { faSearch, faTimes, faTv, faRedo, faExclamationCircle, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contract-management',
  templateUrl: './contract-management.component.html',
  styleUrls: ['./contract-management.component.scss']
})

export class ContractManagementComponent implements OnInit {
  sidebar: any = 'contract_management';
  faSearch = faSearch;
  faTimes = faTimes;
  faTv = faTv;
  faRedo = faRedo;
  faExclamationCircle = faExclamationCircle;
  faDownload = faDownload;
  formSearch: FormGroup;
  tpTwo: any;

  btnState = {
    requested: {
      class: 'btn-bt-arrow-red',
      display: true
    },
    requested_to_me: {
      class: 'btn-bt-arrow',
      display: false
    }
  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.setManuActive(this.sidebar);}

  ngOnInit(): void {
    this.initFormLogin();
    this.route.queryParams.subscribe(
      params => {
        if (params.requested.includes("_to_me")) {
          this.btnState[params.requested].class = 'btn-bt-arrow-red';
          this.btnState[params.requested].display = true;

          this.btnState.requested.class = 'btn-bt-arrow';
          this.btnState.requested.display = false;
        } else {
          this.btnState.requested_to_me.class = 'btn-bt-arrow';
          this.btnState.requested_to_me.display = false;

          this.btnState.requested.class = 'btn-bt-arrow-red';
          this.btnState.requested.display = true;
        }
      });
  }
  
  ngAfterViewInit(): void {
    this.sidebarService.setManuActive(this.sidebar);
  }

  initFormLogin() {
    this.formSearch = this.fb.group({
      searchText: ['']
    });
    this.formSearch.get('searchText').valueChanges.subscribe(selectValue => {
      if (selectValue !== '') {
      } else {
      }
    });
  }

  btnSetState(keyOne: any, keyTwo: any) {
    this.btnState[keyOne].class = 'btn-bt-arrow-red';
    this.btnState[keyOne].display = true;

    this.btnState[keyTwo].class = 'btn-bt-arrow';
    this.btnState[keyTwo].display = false;
  }

}
