import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.scss']
})
export class OrganizationManagementComponent implements OnInit {
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
