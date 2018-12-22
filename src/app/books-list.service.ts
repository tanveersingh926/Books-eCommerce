import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './shared/book.model';
import { map } from 'rxjs/operators';
import { Subscribable, Subject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksListService {
  private books: Array<Book>;
  private booksTobuy: Array<Book> = [];

  constructor(private http: HttpClient) { }

  getBooks () {
    if (this.books === undefined) {
      return this.http.get<Book[]>('https://api.myjson.com/bins/j82l2')
      .pipe(
        map ((books) => {
          this.books = books;
          // console.log(response);
          return this.books;
        })
      );
    } else {
      return of(this.books);
    }

  }

  getBook(bookId: number) {
    let selectedBook: Book;

    this.books.map((book) => {
      if (book._id === bookId) {
        selectedBook = book;
      }
    });

    return of(selectedBook);
  }

  bookTobuy (book: Book) {
    this.booksTobuy.push(book);
  }
}
