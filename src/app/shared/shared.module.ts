import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascaraDirective } from './directives/mascara.directive';
import { TipoPipe, DataPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe,
  	DataPipe
  ],
  exports: [
  	MascaraDirective,
  	TipoPipe,
    DataPipe
  ]
})
export class SharedModule { }
