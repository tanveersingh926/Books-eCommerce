import { Component, OnInit } from '@angular/core';
import { BooksListService } from '../shared/books-list.service';
import { Book } from './book.model';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Array<Book>;
  constructor(private booksListService: BooksListService) { }


  ngOnInit() {
    this.booksListService.getBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );
  }

}
