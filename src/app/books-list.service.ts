import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './shared/book.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksListService {
  private books: Array<Book>;
  constructor(private http: HttpClient) { }

  getBooks () {
    return this.http.get('assets/data/books.json').pipe(
      map ((response) => {
        this.books = response;
        console.log(response);
        return this.books;
      })
    );
  }

  addBook(book: Book) {
    if (this.books === undefined) {
      this.getBooks().subscribe(() => {
        this.books.push(book);
      });
      return;
    }

    this.books.push(book);
    // this.recipesChanged.next(this.recipes.slice());
  }
}
