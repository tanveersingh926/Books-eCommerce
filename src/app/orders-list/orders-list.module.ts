import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { OrdersListComponent } from './orders-list.component';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ]
})
export class OrdersListModule {}
