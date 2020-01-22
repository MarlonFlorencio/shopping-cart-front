import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

import { 
	RegistrationComponent, 
	RegistrationWrapperComponent 
} from './components';

import { UserService } from '../../shared';

import { RegistrationService } from './services';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
  	RegistrationComponent,
  	RegistrationWrapperComponent
  ],
  providers: [
    RegistrationService,
    UserService,
    HttpClient
  ]
})
export class RegisterModule { }
