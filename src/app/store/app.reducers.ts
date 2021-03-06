import { ActionReducerMap } from '@ngrx/store';

import * as fromBooks from '../books-list/store/books.reducers';
import * as fromCheckout from '../checkout/store/checkout.reducers';

export interface AppState {
    books: fromBooks.State;
    checkout: fromCheckout.State;
}

export const reducers: ActionReducerMap<AppState> = {
    books: fromBooks.booksReducer,
    checkout: fromCheckout.CheckoutReducer,
};
