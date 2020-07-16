import { Component, OnInit } from '@angular/core';
import { AlertConfirmService } from './alert-confirm.service';

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.scss']
})
export class AlertConfirmComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  title: string;
  subTitle: string;
  constructor(
    private alertConfirmService: AlertConfirmService
  ) { }

  ngOnInit(): void {
    this.title = this.alertConfirmService.text.title;
    this.subTitle = this.alertConfirmService.text.subTitle;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    this.title = this.alertConfirmService.text.title;
    this.subTitle = this.alertConfirmService.text.subTitle;

    if (this.alertConfirmService.change.show) {
      this.show = this.alertConfirmService.show;
      this.alertConfirmService.setChange('show', false);
    }
    if (this.alertConfirmService.change.html) {
      this.htmlBody = this.alertConfirmService.htmlBody;
      this.alertConfirmService.setChange('html', false);
    }
    if (this.alertConfirmService.change.state) {
      this.state = this.alertConfirmService.getState();
      this.alertConfirmService.setChange('state', false);
    }
  }

  closeModal() {
    this.alertConfirmService.close();
  }

  exportDataTable() {
    this.alertConfirmService.close();
  }

  onClickBtn(btn: any) {
    this.alertConfirmService[btn].func();
  }
}
