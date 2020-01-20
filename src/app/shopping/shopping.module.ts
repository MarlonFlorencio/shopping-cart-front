import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatDialogModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule
} from '@angular/material';

import { 
  HttpUtilService, 
  ItemsService,
  AdminGuard,
  LoginGuard
} from '../shared';

import { SharedModule } from '../shared/shared.module';

import { 
  CartComponent,
  PurchaseComponent,
  PurchasesComponent,
  ShopComponent,
  ShoppingComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
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
    HttpUtilService,
    MatPaginatorIntl,
    CurrencyPipe,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    AdminGuard,
    LoginGuard
  ]//,
  //entryComponents: [ ConfirmarDialog ]
})
export class ShoppingModule { }
