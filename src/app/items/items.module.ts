import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { 
  HttpUtilService, 
  ItemsService,
  AdminGuard,
  LoginGuard
} from '../shared';

import {MatPaginatorIntl} from '@angular/material';

import { 
  ListItemsComponent,
  NewItemComponent,
  EditItemComponent,
  ItemsComponent,
  ConfirmarDialog
} from './components';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    ListItemsComponent,
    NewItemComponent,
    EditItemComponent,
    ItemsComponent,
    ConfirmarDialog
  ],
  providers: [
    ItemsService,
    HttpUtilService,
    MatPaginatorIntl,
    CurrencyPipe,
    AdminGuard,
    LoginGuard
  ],
  entryComponents: [ ConfirmarDialog ]
})
export class ItemsModule { }
