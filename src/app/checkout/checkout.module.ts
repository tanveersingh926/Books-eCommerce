import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { CurrentOrderItemComponent } from './current-order/current-order-item/current-order-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CheckoutComponent,
        ShippingDetailsComponent,
        CurrentOrderComponent,
        CurrentOrderItemComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ]
})
export class CheckoutModule {}
