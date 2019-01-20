import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersListComponent } from './orders-list.component';

const ordersRoutes: Routes = [
  { path: '', component: OrdersListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(ordersRoutes)
  ],
  exports: [RouterModule],
})
export class OrdersListRoutingModule {}
