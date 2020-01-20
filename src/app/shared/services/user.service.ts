import { Injectable } from '@angular/core';

export const TOKEN_NAME: string = 'token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  hasToken() {
    return this.getToken()
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  deleteToken(): void {
    delete localStorage[TOKEN_NAME];
  }
  
  private getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  private getInfoFromToken() {
    const token = this.getToken();
    if(!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }

  hasRole(role: string): boolean {
    const user = this.getInfoFromToken();
    return user ? user.roles.indexOf(role) > -1 : false;
  }

  isTokenExpired(): boolean {
    const user = this.getInfoFromToken();    
    if(!user) return true;

    const date = this.getDate(user.exp);
    if(!date) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  private getDate(value: string): Date {
    if (!value) return null;
    const date = new Date(0); 
    date.setUTCSeconds(Number(value));
    return date;
  }

	
}
