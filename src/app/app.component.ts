import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router, 
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  logout() {
  	this.userService.deleteToken();
  	this.router.navigate(['/login']);
  }

  authenticated(): boolean {
    return !!this.userService.hasToken();
  }

  isAdmin(): boolean {
    return this.userService.hasRole('ADMIN');
  }

  isUser(): boolean {
    return this.userService.hasRole('USER');
  }

}