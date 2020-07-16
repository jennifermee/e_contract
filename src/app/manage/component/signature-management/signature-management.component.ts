import { Component, OnInit } from '@angular/core';
import { faPlus, faDownload, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { ModalAddSignatureService } from '../modal/modal-add-signature/modal-add-signature.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-signature-management',
  templateUrl: './signature-management.component.html',
  styleUrls: ['./signature-management.component.scss']
})
export class SignatureManagementComponent implements OnInit {
  sidebar: any = "set";
  faPlus = faPlus;
  faDownload = faDownload;
  faStar = faStar;
  faTimesCircle = faTimesCircle;
  constructor(
    private modaladdsaignatureservice: ModalAddSignatureService,
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.setManuActive(this.sidebar);
  }

  ngOnInit(): void {
  }

  modalSaignatureOpen() {
    this.modaladdsaignatureservice.open();
  }

  modalSaignatureClose() {
    this.modaladdsaignatureservice.close();
  }
  ngAfterViewInit(): void {
    this.sidebarService.setManuActive(this.sidebar);
  }
}
