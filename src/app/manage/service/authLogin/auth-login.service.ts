import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthToken } from '../../shared/model/token-model';
import TokenUtils from '../../shared/token/token-utils';
import { optionAuth } from '../../shared/options-header/optionOAuth';
import { API_URL } from '../api.constant'
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private pathOAuthLoginUrl: string = API_URL.apiLogin;
  private clientId: string = API_URL.clientId;
  private clientSecret: string = API_URL.clientSecret;
  private grantType: string = API_URL.grantType;

  constructor(
    private http: HttpClient
  ) { }

  authLogin(user: string, password: string) {
    const param = 'username=' + user + '&password=' + password + '&grant_type=' + this.grantType;
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.pathOAuthLoginUrl, param, optionAuth(this.clientId, this.clientSecret)).subscribe((res: OAuthToken) => {
        TokenUtils.setToken(res);
        localStorage.setItem('userId', user);
        resolve(res);
      }, (error) => {
        console.log(error);
        reject(error);
      }
      );
    });
  }

  logout() {
    TokenUtils.removeToken();
    localStorage.removeItem('userId');
  }
}
