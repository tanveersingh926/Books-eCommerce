import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../books-list/book.model';
import { map } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { ShoppingCart } from './shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {
  private books: Array<Book> ;

  private shoppingCart: ShoppingCart = {
    'subtotal': 0,
    'shipping': 400,
    'tax': 200,
    'total': 0,
  };

  private booksTobuy: Array<Book> = [];

  selectedBook = new Subject<Book>();
  booksToBuyChanged = new Subject<Book[]>();
  shoppingCartChanged = new Subject<any>();

  constructor(private http: HttpClient) { }

  getBooks () {
    if (this.books === undefined) {
      return this.http.get<Book[]>('https://api.myjson.com/bins/j82l2')
      .pipe(
        map ((books: Array<Book>) => {
          this.books = books;
          return this.books;
        })
      );
    } else {
      return of(this.books);
    }
  }

  getBook(bookId: number) {
    let selectedBook: Book;


    if (this.books === undefined) {
      this.getBooks().subscribe((books) => {
        this.books = books;

        this.books.map((book) => {
          if (book._id === bookId) {
            selectedBook = book;
          }
        });
        this.selectedBook.next(selectedBook);
      });
      return this.selectedBook;
    } else {
      this.books.map((book) => {
        if (book._id === bookId) {
          selectedBook = book;
        }
      });
      return of(selectedBook);
    }
  }

  bookTobuy (book: Book) {
    this.booksTobuy.push(book);
  }

  selectedBooksToBuy () {
    return this.booksTobuy;
  }

  removeSelectedBookToBuy (bookId: number) {
    let bookToRemove: number;
    this.booksTobuy.map((book, index) => {
      if (book._id === bookId) {
        bookToRemove = index;
      }
    });

    this.booksTobuy.splice(bookToRemove, 1);

    this.booksToBuyChanged.next(this.booksTobuy);
    const test = this.shoppingCartDetail();
    this.shoppingCartChanged.next(this.shoppingCart);
  }

  shoppingCartDetail () {
    let subtotal = 0;
    const tax = this.shoppingCart.tax;
    const shipping = this.shoppingCart.shipping;
    this.booksTobuy.map((book) => {
      subtotal += +book.price;
    });
    this.shoppingCart.subtotal = subtotal;
    this.shoppingCart.total = subtotal ? subtotal + tax + shipping : 0;
    this.shoppingCart.tax = tax;
    return this.shoppingCart;
  }
}
