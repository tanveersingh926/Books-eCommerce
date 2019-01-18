import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as BooksActions from './store/books.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[];
  booksState: Observable<Book[]>;

  constructor(private store: Store<fromApp.AppState>) { }


  ngOnInit() {
    this.store.select('books').subscribe(
     (booksState) => {
        this.books = booksState.booksList;
      }
    );

    if (!this.books.length) {
      this.store.dispatch(new BooksActions.TryFetchBooks());
      this.store.subscribe(
        (data) => {
          this.books = data.books.booksList;
        }
      );
    }
  }
}


