import { Component, OnInit } from '@angular/core';
import { SubmitCertificateService } from './submit-certificate.service'

import { faCheck } from '@fortawesome/free-solid-svg-icons/';
@Component({
  selector: 'app-submit-certificate',
  templateUrl: './submit-certificate.component.html',
  styleUrls: ['./submit-certificate.component.scss']
})
export class SubmitCertificateComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  faCheck = faCheck;
  constructor(
    private submitcertificateservice: SubmitCertificateService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.submitcertificateservice.change.show) {
      this.show = this.submitcertificateservice.show;
      this.submitcertificateservice.setChange('show', false);
    }
    if (this.submitcertificateservice.change.html) {
      this.htmlBody = this.submitcertificateservice.htmlBody;
      this.submitcertificateservice.setChange('html', false);
    }
    if (this.submitcertificateservice.change.state) {
      this.state = this.submitcertificateservice.getState();
      this.submitcertificateservice.setChange('state', false);
    }
  }

  closeModal() {
    this.submitcertificateservice.close();
  }

  exportDataTable() {
    this.submitcertificateservice.close();
  }
}
