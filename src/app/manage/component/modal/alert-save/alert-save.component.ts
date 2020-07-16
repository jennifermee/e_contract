import { Component, OnInit } from '@angular/core';
import { AlertSaveService } from './alert-save.service';

@Component({
  selector: 'app-alert-save',
  templateUrl: './alert-save.component.html',
  styleUrls: ['./alert-save.component.scss']
})
export class AlertSaveComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  constructor(private alertSaveService: AlertSaveService) {

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.alertSaveService.change.show) {
      this.show = this.alertSaveService.show;
      this.alertSaveService.setChange('show', false);
    }
    if (this.alertSaveService.change.html) {
      this.htmlBody = this.alertSaveService.htmlBody;
      this.alertSaveService.setChange('html', false);
    }
    if (this.alertSaveService.change.state) {
      this.state = this.alertSaveService.getState();
      this.alertSaveService.setChange('state', false);
    }
  }

  closeModal() {
    this.alertSaveService.close();
  }

  exportDataTable() {
    this.alertSaveService.close();
  }

  onClickBtn(btn: any) {
    this.alertSaveService[btn].func();
  }
}

