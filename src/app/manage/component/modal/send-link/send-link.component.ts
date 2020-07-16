import { Component, OnInit } from '@angular/core';
import { SendLinkService } from './send-link.service';

@Component({
  selector: 'app-send-link',
  templateUrl: './send-link.component.html',
  styleUrls: ['./send-link.component.scss']
})
export class SendLinkComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  constructor(
    private sendLinkService: SendLinkService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.sendLinkService.change.show) {
      this.show = this.sendLinkService.show;
      this.sendLinkService.setChange('show', false);
    }
    if (this.sendLinkService.change.html) {
      this.htmlBody = this.sendLinkService.htmlBody;
      this.sendLinkService.setChange('html', false);
    }
    if (this.sendLinkService.change.state) {
      this.state = this.sendLinkService.getState();
      this.sendLinkService.setChange('state', false);
    }
  }

  closeModal() {
    this.sendLinkService.close();
  }

  exportDataTable() {
    this.sendLinkService.close();
  }

  onClickBtn(btn: any) {
    this.sendLinkService[btn].func();
  }
}
