import { Action } from '@ngrx/store';
import { Book } from 'src/app/books-list/book.model';
import { Address } from 'src/app/shared/single-order';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const UPDATE_PAYMENT_DETAILS = 'UPDATE_PAYMENT_DETAILS';
export const COMPLETE_PURCHASE = 'COMPLETE_PURCHASE';
export const CANCEL_PURCHASE = 'CANCEL_PURCHASE';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';

export class AddBook implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
    readonly type = REMOVE_BOOK;

    constructor(public payload: number) {}
}

export class UpdatePaymentDetails implements Action {
    readonly type = UPDATE_PAYMENT_DETAILS;
}

export class CompletePurchase implements Action {
    readonly type = COMPLETE_PURCHASE;
}

export class CancelPurchase implements Action {
    readonly type = CANCEL_PURCHASE;
}

export class UpdateAddress implements Action {
    readonly type = UPDATE_ADDRESS;

    constructor(public payload: Address) {}
}

export class EditAddress implements Action {
    readonly type = EDIT_ADDRESS;
}

export type CheckoutActions = AddBook | RemoveBook | UpdatePaymentDetails | CompletePurchase | CancelPurchase | UpdateAddress | EditAddress;
