import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LoginComponent, LogarComponent } from './components';
import { LoginService } from './services';

import { UserService } from '../../shared';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
  	LoginComponent,
  	LogarComponent
  ],
  providers: [
    LoginService,
    UserService,
    HttpClient
  ]
})
export class LoginModule { }
