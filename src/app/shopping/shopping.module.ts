import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorIntl } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { 
  HttpUtilService, 
  ItemsService,
  CartService,
  AdminGuard,
  LoginGuard
} from '../shared';

import { 
  CartComponent,
  PurchaseComponent,
  PurchasesComponent,
  ShopComponent,
  ShoppingComponent
} from './components';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    CartComponent,
    PurchaseComponent,
    PurchasesComponent,
    ShopComponent,
    ShoppingComponent
  ],
  providers: [
    ItemsService,
    CartService,
    HttpUtilService,
    MatPaginatorIntl,
    CurrencyPipe,
    AdminGuard,
    LoginGuard
  ]
})
export class ShoppingModule { }
