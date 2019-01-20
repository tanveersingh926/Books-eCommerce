import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { OrdersListComponent } from './orders-list.component';
import { OrderItemComponent } from './order-item/order-item.component';

import { OrdersHistoryReducer } from './store/orders-list.reducers';
import { StoreModule } from '@ngrx/store';
import { OrdersListRoutingModule } from './orders-list-routing.module';

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    OrdersListRoutingModule,
    StoreModule.forFeature('ordersHistory', OrdersHistoryReducer)
  ]
})
export class OrdersListModule {}
