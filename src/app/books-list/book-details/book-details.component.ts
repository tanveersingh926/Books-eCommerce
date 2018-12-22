import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BooksListService } from 'src/app/books-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private booksListService: BooksListService) { }
  addBook () {
    const book = new Book(122, 'asdsa', 'asdsa', 'asdsa', 'asdsa', 22, 'asdsa', 'asdsa', 55, 'asdsa', 'asdsa', 'asdsa');
    this.booksListService.addBook(book);
    console.log('done');
  }

  ngOnInit() {
  }

}
