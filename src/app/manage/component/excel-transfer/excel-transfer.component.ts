import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import * as XLSX from 'xlsx';
import { ModalService } from '../modal/modal.service';
import { TableDataService } from '../table-data/table-data.service';

@Component({
  selector: 'app-excel-transfer',
  templateUrl: './excel-transfer.component.html',
  styleUrls: ['./excel-transfer.component.scss']
})
export class ExcelTransferComponent implements OnInit {
  faDownload = faDownload;
  faUpload = faUpload;
  title = 'XlsRead';
  file: File;
  arrayBuffer: any;
  filelist: any;
  titleKey = {
    number: '번호',
    name: '이름',
    rank: '직급',
    department: '부서'
  };
  constructor(
    private modalService: ModalService,
    private tableDataService: TableDataService) { }

  ngOnInit(): void {
  }

  addfile(event) {
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i != data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      // tslint:disable-next-line: variable-name
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      const arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.filelist = [];
      this.tableDataService.setDataTable(arraylist, this.titleKey, 'name');
      this.modalService.setState('tableData');
      // console.log(this.filelist);
    };
  }

}
