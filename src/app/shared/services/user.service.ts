import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private getInfoFromToken() {
    if (!this.hasToken()) {
      return null;
    }
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }

  hasRole(role: string): boolean {
    const user = this.getInfoFromToken();
    return user ? user.roles.indexOf(role) > -1 : false;
  }

  hasToken() {
    return localStorage['token']
  }
	
}
