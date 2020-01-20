import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) {}

  canActivate(): boolean {
    if (!this.userService.isTokenExpired()) {
      return true;
    }

    this.userService.deleteToken();
    this.router.navigate(['/login']);
    return false;
  }

}
