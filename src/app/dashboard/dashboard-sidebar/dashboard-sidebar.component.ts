import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faBellSlash = faBellSlash;
  faBell = faBell;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faYoutubeSquare = faYoutubeSquare;
  faSkype = faSkype;
  faHome = faHome;
  faCog = faCog;
  faFilePdf = faFilePdf;
  faFileAlt = faFileAlt;
  sidebar = true;

  constructor(private router: Router, ) { }

  ngOnInit(): void {
    this.sidebar = true;
  }


  changePage(page: any) {
    if (page === 'user') {
      this.router.navigate(['dashboard/home'], { queryParams: { show: 'user' } });
    }

    if (page === 'position') {
      this.router.navigate(['dashboard/home'], { queryParams: { show: 'position' } });
    }

    if (page === 'role') {
      this.router.navigate(['dashboard/home'], { queryParams: { show: 'role' } });
    }

    if (page === 'codebook') {
      this.router.navigate(['dashboard/home'], { queryParams: { show: 'codebook' } });
    }
  }

  toggleSideBar(){
    this.sidebar = !this.sidebar;
  }
}
