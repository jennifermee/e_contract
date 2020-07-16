import { Component, OnInit } from '@angular/core';
import { ModalTeamMemberService } from './modal-team-member.service';
@Component({
  selector: 'app-modal-team-member',
  templateUrl: './modal-team-member.component.html',
  styleUrls: ['./modal-team-member.component.scss']
})
export class ModalTeamMemberComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;

  empDataList: any;
  objTable: any;
  name: String;
  tel: String;
  team: String;
  department: String;
  email: String;

  constructor(
    private modalteammemberservice: ModalTeamMemberService
  ) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.modalteammemberservice.change.show) {
      this.show = this.modalteammemberservice.show;
      this.modalteammemberservice.setChange('show', false);
    }
    if (this.modalteammemberservice.change.html) {
      this.htmlBody = this.modalteammemberservice.htmlBody;
      this.modalteammemberservice.setChange('html', false);
    }
    if (this.modalteammemberservice.change.state) {
      this.state = this.modalteammemberservice.getState();
      this.modalteammemberservice.setChange('state', false);
    }
  }

  closeModal() {
    this.modalteammemberservice.close();
  }

  exportDataTable() {
    this.modalteammemberservice.close();
  }
}
