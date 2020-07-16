import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { TableDataService } from '../table-data/table-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  show: boolean;
  htmlBody: string;
  state: string;
  constructor(
    private modalService: ModalService,
    private tableDataService: TableDataService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.modalService.change.show) {
      this.show = this.modalService.show;
      this.modalService.setChange('show', false);
    }
    if (this.modalService.change.html) {
      this.htmlBody = this.modalService.htmlBody;
      this.modalService.setChange('html', false);
    }
    if (this.modalService.change.state) {
      this.state = this.modalService.getState();
      this.modalService.setChange('state', false);
    }


  }

  closeModal() {
    this.modalService.close();
  }

  exportDataTable() {
    this.tableDataService.exportData();
    this.modalService.close();
  }

}
