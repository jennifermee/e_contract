import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  userShow = false;
  roleShow = false;
  codebookShow = false;
  positionShow = false;
  homeShow = false;
  profileShow = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        if (params.show === 'user') {
          this.userShow = true;
          this.roleShow = false;
          this.codebookShow = false;
          this.positionShow = false;
          this.homeShow = false;
          this.profileShow = false;
        } else if (params.show === 'role') {
          this.userShow = false;
          this.roleShow = true;
          this.codebookShow = false;
          this.positionShow = false;
          this.homeShow = false;
          this.profileShow = false;
        } else if (params.show === 'position') {
          this.userShow = false;
          this.roleShow = false;
          this.codebookShow = false;
          this.positionShow = true;
          this.homeShow = false;
          this.profileShow = false;
        } else if (params.show === 'codebook') {
          this.userShow = false;
          this.roleShow = false;
          this.codebookShow = true;
          this.positionShow = false;
          this.homeShow = false;
          this.profileShow = false;
        } else if (params.show === 'profile') {
          this.userShow = false;
          this.roleShow = false;
          this.codebookShow = false;
          this.positionShow = false;
          this.homeShow = false;
          this.profileShow = true;
        } else {
          this.homeShow = true;
          this.userShow = false;
          this.roleShow = false;
          this.codebookShow = false;
          this.positionShow = false;
          this.profileShow = false;
        }
      }
    )
  }



}
