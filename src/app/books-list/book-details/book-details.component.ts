import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books-list/book.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as BooksActions from '../store/books.actions';
import * as CheckoutActions from '../../checkout/store/checkout.actions';
import { BooksListService } from 'src/app/shared/books-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private booksListService: BooksListService
  ) { }

  buyNow () {
    this.booksListService.buyBook(this.book);

    this.router.navigate(['/checkout']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.bookId = +params['id'];

      this.store.select('books').subscribe(
        (books) => {
          if (!books.booksList.length) {
            this.store.dispatch(new BooksActions.TryFetchBooks());
          }
          books.booksList.map((book) => {
            if (book._id === this.bookId) {
              this.book = book;
            }
          });
        }
      );

    });
  }

}
