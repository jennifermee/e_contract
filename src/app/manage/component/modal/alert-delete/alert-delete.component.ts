import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-delete',
  templateUrl: './alert-delete.component.html',
  styleUrls: ['./alert-delete.component.scss']
})
export class AlertDeleteComponent implements OnInit {
  show: boolean;
  constructor() { }

  ngOnInit(): void {
    this.show = true;
  }

}
