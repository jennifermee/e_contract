import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
@Component({
  selector: 'app-information-manage',
  templateUrl: './information-manage.component.html',
  styleUrls: ['./information-manage.component.scss']
})
export class InformationManageComponent implements OnInit {
  sidebar: any = 'set';
  constructor(
    private sidebarService: SidebarService,
  ) { 
    this.sidebarService.setManuActive(this.sidebar);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.sidebarService.setManuActive(this.sidebar);
  }
}
