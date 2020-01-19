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
} from '../shared';

import { SharedModule } from '../shared/shared.module';

import { 
  ListItemsComponent,
  NewItemComponent,
  EditItemComponent,
  ItemsComponent,
  ConfirmarDialog
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
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    AdminGuard
  ],
  entryComponents: [ ConfirmarDialog ]
})
export class ItemsModule { }






