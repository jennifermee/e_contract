import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-mail-template-management',
  templateUrl: './mail-template-management.component.html',
  styleUrls: ['./mail-template-management.component.scss']
})
export class MailTemplateManagementComponent implements OnInit {
  sidebar: any = "set";
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
