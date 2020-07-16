import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../../service/authLogin/auth-login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit {



  constructor(
    private authService: AuthLoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
