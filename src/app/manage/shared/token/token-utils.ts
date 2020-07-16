import { OAuthToken } from '../model/token-model';

const TOKEN_KEY = 'access_token';

export default class TokenUtils {
  static setToken(token: OAuthToken) {
    localStorage.setItem(TOKEN_KEY, token.access_token);
  }
  static getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
  static removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
