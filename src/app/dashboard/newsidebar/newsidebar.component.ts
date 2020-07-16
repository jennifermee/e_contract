import { Component, OnInit,ElementRef, OnDestroy } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons/faBellSlash';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsidebar',
  templateUrl: './newsidebar.component.html',
  styleUrls: ['./newsidebar.component.scss']
})
export class NewsidebarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faBellSlash = faBellSlash;
  faChevronRight = faChevronRight;
  faBell = faBell;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faYoutubeSquare = faYoutubeSquare;
  faSkype = faSkype;
  faHome = faHome;
  faCog = faCog;
  faBars = faBars;
  faFilePdf = faFilePdf;
  faFileAlt = faFileAlt;
  sidebar = true;
  constructor(
    private router: Router,
     ) { }

  ngOnInit(): void {
    this.sidebar = true;
  }

  changePage(page: any) {
      this.router.navigate(['dashboard/home'], { queryParams: { show: page } });
  }

  toggleSideBar(){
    this.sidebar = ! this.sidebar;
    console.log(this.sidebar)
    // let el = document.getElementsByClassName('sidebar');
    // let ac = el.getAttribute('class');
    // if (ac == 'sidebar fliph') {
    //   el.setAttribute('class', 'noactivate');
    // } else {
    //   el.setAttribute('class', 'activate');
    // }
  }
}
