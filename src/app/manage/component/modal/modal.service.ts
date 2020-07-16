import { Injectable } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
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
  htmlBody: string;
  state: string;
  constructor() {

  }

  setState(state?: 'excelTransfer' | 'tableData') {
    this.state = state;
    this.change.state = true;
  }

  getState(){
    return this.state;
  }

  open() {
    this.change.show = true;
    this.show = this.status.open;
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
