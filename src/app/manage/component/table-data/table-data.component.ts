import { Component, OnInit, } from '@angular/core';
import { TableDataService } from '../table-data/table-data.service';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  dataTable: any;
  titbleTable: any;
  keyTitle: any;
  dataDisplay: any;
  total: number;
  searchPlaceholder: any;
  faSearch = faSearch;
  faTimes = faTimes;
  formSearch: FormGroup;
  constructor(
    private tableDataService: TableDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formSearch = this.fb.group({
      searchText: ['']
    });
    this.formSearch.get('searchText').valueChanges.subscribe(selectValue => {
      if (selectValue !== '') {
        this.searchDataTable(selectValue);
      } else {
        this.setDataDisplay(this.dataTable);
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {
    // tslint:disable-next-line: max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.

    if (this.tableDataService.change.importData) {
      this.dataTable = this.tableDataService.getDataTable();
      this.titbleTable = this.tableDataService.getTitleTable();
      this.keyTitle = Object.keys(this.titbleTable);
      this.searchPlaceholder = this.tableDataService.getSearchPlaceholder();
      this.tableDataService.setChange('importData', false);
      this.setDataDisplay(this.dataTable);
    }
  }

  setDataDisplay(data: any) {
    this.dataDisplay = data;
    this.total = data.length;
  }

  searchDataTable(text: string) {
    const search = this.searchPlaceholder;
    const textSearch = text;
    // tslint:disable-next-line: only-arrow-functions
    const data = this.dataTable.filter(function (datafilter) {
      if (datafilter[search].includes(textSearch)) {
        return true;
      }
      return false;
    });
    this.setDataDisplay(data);
  }

  removeDataByIndex(text: string) {
    let index = this.dataTable.findIndex(res => res[this.keyTitle[0]] === text);

    if (index > -1) {
      this.dataTable.splice(index, 1);
    }
    if (this.formSearch.get('searchText').value !== '') {
      this.searchDataTable(this.formSearch.get('searchText').value);
    } else {
      this.setDataDisplay(this.dataTable);
    }
    this.tableDataService.setData(this.dataTable);
  }
}
