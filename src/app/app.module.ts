import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
} from '@angular/material';

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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    LoginModule,
    LoginRoutingModule,
    RegisterModule,
    RegisterRoutingModule,
    ItemsModule,
    ItemsRoutingModule,
    SharedModule,
    ShoppingModule,
    ShoppingRoutingModule,

    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
