import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  LoginModule,
  LoginRoutingModule,
  RegisterModule,
  RegisterRoutingModule
}  from './autenticacao';

import { UserService } from './shared';
import { SharedModule } from './shared/shared.module'


import {
  ItemsModule,
  ItemsRoutingModule
} from './items'

import {
  ShoppingModule,
  ShoppingRoutingModule
} from './shopping'

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    RegisterModule,
    RegisterRoutingModule,
    ItemsModule,
    ItemsRoutingModule,
    ShoppingModule,
    ShoppingRoutingModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
