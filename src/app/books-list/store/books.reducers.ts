import { Book } from '../book.model';
import * as BooksActions from './books.actions';

export interface State {
    booksList: Book[];
}

const initialState = {
    booksList: []
};

export function booksReducer(state = initialState, action: BooksActions.BooksActions) {
    switch (action.type) {
        case BooksActions.ADD_BOOKS:
            return {
                ...state,
                booksList: action.payload
            };

        default:
            return state;
    }
}
