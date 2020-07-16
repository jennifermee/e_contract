import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import TokenUtils from '../../manage/shared/token/token-utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  languages: any;
  selectl: any;
  manu: any;
  showbtn: boolean = false;
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
  ) { }

  ngOnInit(): void {
    this.languages = {
      en: 'English', kr: '한글'
    };
    this.manu = {
      en: {
        about: 'About',
        service: 'Service',
        features: 'Features',
        contact: 'Contact'
      },
      kr: {
        about: '약',
        service: '서비스',
        features: '풍모',
        contact: '접촉'
      }
    }
    this.selectl = 'en';
    this.checkShowBtn();
  }
  
  ngDoCheck(): void {
    this.checkShowBtn();
  }

  selectLanguages(lg: String) {
    this.selectl = lg;
  }

  toHomepage(el: String) {
    this.router.navigate(['/' + el]);
  }

  checkShowBtn() {
    const accessToken = TokenUtils.getToken();
    console.log((accessToken && !this.jwtHelper.isTokenExpired(accessToken)))
    if (accessToken && !this.jwtHelper.isTokenExpired(accessToken)) {
      this.showbtn = true;
    } else {
      this.showbtn = false;
    }
  }
}
