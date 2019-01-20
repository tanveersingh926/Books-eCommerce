import { Component, OnInit} from '@angular/core';
import { Book } from '../../books-list/book.model';
import { ShoppingCart } from '../../shared/shopping-cart.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as CheckoutActions from '../store/checkout.actions';
import * as OrdersHistoryActions from '../../orders-list/store/orders-list.actions';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss']
})
export class CurrentOrderComponent implements OnInit {
  selectedBooks: Book[];
  cartDetail: ShoppingCart;
  purchaseBtnState: boolean;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store
      .subscribe(
          (data) => {
            this.selectedBooks = data.checkout.selectedBooks;
            this.cartDetail = data.checkout.paymentDetails;
            this.purchaseBtnState = data.checkout.shippingDetails.isAddressAvailable && !!data.checkout.selectedBooks.length;
          }
      );
  }

  completePurchase() {
    this.store.select('checkout')
      .pipe(
        take(1)
      )
      .subscribe(
        (data) => {
          console.log(data);
          if (!data.selectedBooks.length) {
            alert('You don\'t have any books in your shopping bag');
            return;
          }
          data.orderStatus.shippedOn = new Date();
          this.store.dispatch(new OrdersHistoryActions.AddToHistory(data));
          this.store.dispatch(new CheckoutActions.CompletePurchase());
          this.router.navigate(['/my-orders']);
        }
      );

  }

  cancelPurchase() {
    this.store.dispatch(new CheckoutActions.CancelPurchase());
    this.router.navigate(['/books']);
  }

}
