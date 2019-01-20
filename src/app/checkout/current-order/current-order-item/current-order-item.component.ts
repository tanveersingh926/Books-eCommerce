import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../books-list/book.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducers';
import * as CheckoutActions from '../../store/checkout.actions';

@Component({
  selector: 'app-current-order-item',
  templateUrl: './current-order-item.component.html',
  styleUrls: ['./current-order-item.component.scss']
})
export class CurrentOrderItemComponent implements OnInit {
  @Input() book: Book;
  constructor(
      private store: Store<fromApp.AppState>
    ) { }

  removeBook(event) {
    event.preventDefault();
    this.store.dispatch(new CheckoutActions.RemoveBook(this.book._id));
    this.store.dispatch(new CheckoutActions.UpdatePaymentDetails());

  }

  ngOnInit() {
  }

}
