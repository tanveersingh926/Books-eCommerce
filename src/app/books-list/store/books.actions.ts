import { Action } from '@ngrx/store';
import { Book } from '../book.model';

export const TRY_FETCH_BOOKS = 'TRY_FETCH_BOOKS';
export const ADD_BOOKS = 'ADD_BOOKS';

export class TryFetchBooks implements Action {
    readonly type = TRY_FETCH_BOOKS;

}
export class AddBooks implements Action {
    readonly type = ADD_BOOKS;

    constructor(public payload: Book[]) {}
}

export type BooksActions = AddBooks | TryFetchBooks;
