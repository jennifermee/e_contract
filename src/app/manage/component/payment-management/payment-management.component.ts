import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.scss']
})
export class PaymentManagementComponent implements OnInit {
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
