import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './modules';
import { MascaraDirective } from './directives/mascara.directive';
import { DataPipe } from './';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: [
  	MascaraDirective,
  	DataPipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MascaraDirective,
    DataPipe
  ],
  providers: [
    HttpClient
  ],
})
export class SharedModule { }
