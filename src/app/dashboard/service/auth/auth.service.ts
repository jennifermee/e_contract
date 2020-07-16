import { Injectable } from '@angular/core';

// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(public jwtHelper: JwtHelperService) {}
  constructor() { }

  public isAuthenticated(): boolean {


    return false;
    // const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
  }


}
