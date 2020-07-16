import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendLinkService {
  status = {
    open: true,
    close: false
  };
  show = false;
  change = {
    show: false,
    html: false,
    state: false
  };

  btnCancel: any;
  btnConfirm: any;
  htmlBody: string;
  state: string;
  constructor() { }

  setState(state?: 'excelTransfer' | 'tableData') {
    this.state = state;
    this.change.state = true;
  }

  getState(){
    return this.state;
  }

  open(btnCancel: any,btnConfirm: any) {
    this.change.show = true;
    this.show = this.status.open;
    this.btnCancel = btnCancel;
    this.btnConfirm = btnConfirm;
  }

  close() {
    this.change.show = true;
    this.show = this.status.close;
  }

  setChange(type: any, status: boolean) {
    this.change[type] = status;
  }

  setHtmlBody(html: string) {
    this.change.html = true;
    this.htmlBody = html;
  }
}
