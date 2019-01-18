import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Book } from '../books-list/book.model';
import * as CheckoutActions from '../checkout/store/checkout.actions';


@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  buyBook(book: Book) {
    this.store.dispatch(new CheckoutActions.AddBook(book));
    this.store.dispatch(new CheckoutActions.UpdatePaymentDetails());
  }
}
