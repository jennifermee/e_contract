import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-inquiry-managemant',
  templateUrl: './inquiry-managemant.component.html',
  styleUrls: ['./inquiry-managemant.component.scss']
})
export class InquiryManagemantComponent implements OnInit {
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
