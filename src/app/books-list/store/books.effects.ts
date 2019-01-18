import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Observable } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';

import { Book } from '../book.model';
import * as BooksActions from './books.actions';


@Injectable()
export class BooksEffects {
    @Effect()
    fetchBooks  = this.actions$
        .pipe(
            ofType(BooksActions.TRY_FETCH_BOOKS)
        )
        .pipe(
            map(() => {
                return from(this.http.get<Book[]>('https://api.myjson.com/bins/j82l2'));
            }),
            switchMap(
                (books: Observable<Book[]>) => {
                    return books;
                }
            ),
            mergeMap(
                (books: Book[]) => {
                    return [
                        {
                            type: BooksActions.ADD_BOOKS,
                            payload: books
                        }
                    ];
                }
            )
        );

    constructor(private actions$: Actions, private http: HttpClient) {
    }
}
