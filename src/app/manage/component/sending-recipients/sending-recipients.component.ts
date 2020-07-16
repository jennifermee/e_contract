import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { ModalService } from '../modal/modal.service';
import { TableDataService } from '../table-data/table-data.service';
@Component({
  selector: 'app-sending-recipients',
  templateUrl: './sending-recipients.component.html',
  styleUrls: ['./sending-recipients.component.scss']
})
export class SendingRecipientsComponent implements OnInit {
  contactLists: any[];
  faPlus = faPlus;
  faTimes = faTimes;
  sidebar: any = '';
  formData: FormGroup;

  constructor(
    private modalService: ModalService,
    private tableDataService: TableDataService,
    private fb: FormBuilder
  ) {
  }


  ngOnInit(): void {
    this.contactLists = [];
    this.init_data();
    this.formData = this.fb.group(FormGroup);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    if (this.tableDataService.change.exportData) {
      this.setDataImport(this.tableDataService.getDataTable());
      this.tableDataService.setChange('exportData', false);
    }
  }

  init_data() {
    // this.contactLists.push({ name: '', e_mail: '', phone: '' });
  }

  pushContact() {
    this.contactLists.push({ name: '', e_mail: '', phone: '' });
  }

  removeContact(index: any) {
    this.contactLists.splice(index, 1);
  }

  setDataImport(data: any[]) {
    data.forEach(element => {
      this.contactLists.push(element);
    });
  }

  openModal() {
    this.modalService.setHtmlBody('<app-excel-transfer></app-excel-transfer>');
    this.modalService.setState('excelTransfer');
    this.modalService.open();
  }

  checkDataForm() {
    // const formElement = <HTMLFormElement> document.getElementById("formData");
    var formData = new FormData(document.querySelector('form#formData'));
    console.log(formData, document.querySelector('form#formData'));
  }
}
