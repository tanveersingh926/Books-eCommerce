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

  constructor(private http: HttpClient) { }

  getBooks () {
    // return this.http.get('http://localhost:4300/books').pipe(
    return this.http.get('https://api.myjson.com/bins/j82l2')
    .pipe(
      map ((response) => {
        console.log(response);
        this.books = response;
        // console.log(response);
        return this.books;
      })
    );
  }

  getBook(bookId: number) {
    // return this.books.pipe()
    let test: Book;
    this.books.map((book) => {
      if (book._id === bookId) {
        console.log(book);
        test = book;
      }
    });
    return of(test);
    // return of(this.books).pipe(map((books) => {
    //   return books.map((book) => {
    //     if (book._id === bookId) {
    //       console.log(book);
    //       return of(book);
    //     }
    //   });
    // }));
  }
}
