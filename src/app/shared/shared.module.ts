import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentsToDollarPipe } from './cents-to-dollar.pipe';

@NgModule({
  declarations: [
    CentsToDollarPipe
  ],
  exports: [
    CommonModule,
    CentsToDollarPipe
  ]
})
export class SharedModule {}
