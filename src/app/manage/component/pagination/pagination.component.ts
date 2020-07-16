import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: any;
  @Input() maxPage: any;
  @Output() seclectPage: EventEmitter<any>;

  pagination = {
    currentPage: 0,
    nextPage: 0,
    previousPage: 0,
    lastPage: 0,
    firstPage: 0
  }

  startNumber: any;
  endNumber: any;
  pageNumber: any;


  constructor() { }

  initPagination() {
    this.pagination.currentPage = this.currentPage;
    this.pagination.nextPage = this.currentPage + 1;
    this.pagination.previousPage = this.currentPage - 1;
    this.pagination.lastPage = this.maxPage;
    this.pagination.firstPage = 1;
    this.genStartNumber()
    this.pageNumber = this.arrayGen(10, this.startNumber);
  }

  changerPageNext(page: number) {
    this.pagination.currentPage = page;
    this.pagination.nextPage = page + 1;
    this.pagination.previousPage = page - 1;
    console.log(this.endNumber,this.pagination.currentPage,"changerPageNext");
    if(this.endNumber < this.pagination.currentPage){
      this.genStartNumber();
      this.pageNumber = this.arrayGen(10, this.startNumber);
    }
  }

  changerPage(page: number) {
    this.pagination.currentPage = page;
    this.pagination.nextPage = page + 1;
    this.pagination.previousPage = page - 1;
  }
  
  changerPagePrevious(page: number) {
    this.pagination.currentPage = page;
    this.pagination.nextPage = page + 1;
    this.pagination.previousPage = page - 1;
    console.log(this.startNumber,this.pagination.currentPage,"changerPagePrevious");
    if(this.startNumber > this.pagination.currentPage){
      this.genStartNumber();
      this.pageNumber = this.arrayGen(10, this.startNumber);
    }
  }

  ngOnInit(): void {
    this.initPagination();
  }

  genStartNumber() {
    this.startNumber = (parseInt((((this.pagination.currentPage - 1) / 10) + '')) * 10) + 1;
  }

  arrayGen(n: number, startFrom: number): number[] {
    if ((n + startFrom) > this.maxPage) {
      this.endNumber = this.maxPage
      return [...Array(((this.maxPage - startFrom)) + 1).keys()].map(i => i + startFrom);
    } else {
      this.endNumber = ((n + startFrom)) - 1;
      return [...Array(n).keys()].map(i => i + startFrom);
    }
  }

}
