import { Component, OnInit } from '@angular/core';

import { ModalAddSignatureService } from './modal-add-signature.service';
@Component({
  selector: 'app-modal-add-signature',
  templateUrl: './modal-add-signature.component.html',
  styleUrls: ['./modal-add-signature.component.scss']
})
export class ModalAddSignatureComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;
  constructor(
    private modaladdsignatureservice: ModalAddSignatureService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.modaladdsignatureservice.change.show) {
      this.show = this.modaladdsignatureservice.show;
      this.modaladdsignatureservice.setChange('show', false);
    }
    if (this.modaladdsignatureservice.change.html) {
      this.htmlBody = this.modaladdsignatureservice.htmlBody;
      this.modaladdsignatureservice.setChange('html', false);
    }
    if (this.modaladdsignatureservice.change.state) {
      this.state = this.modaladdsignatureservice.getState();
      this.modaladdsignatureservice.setChange('state', false);
    }


  }

  closeModal() {
    this.modaladdsignatureservice.close();
  }

  exportDataTable() {
    this.modaladdsignatureservice.close();
  }
}
