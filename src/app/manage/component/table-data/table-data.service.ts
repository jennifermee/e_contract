import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  dataTable: any;
  titleTable: any;
  searchPlaceholder: any;
  change = {
    exportData: false,
    importData: false
  };

  constructor() { }

  setDataTable(data: any, title: any, searchPlaceholder: any) {
    this.titleTable = title;
    this.dataTable = data;
    this.searchPlaceholder = searchPlaceholder;
    this.change.importData = true;
  }
  setData(data: any) {
    this.dataTable = data;
  }

  exportData() {
    this.change.exportData = true;
  }

  getDataTable() {
    return this.dataTable;
  }
  getTitleTable() {
    return this.titleTable;
  }
  getSearchPlaceholder() {
    return this.searchPlaceholder;
  }

  setChange(type: any, status: boolean) {
    this.change[type] = status;
  }
}
