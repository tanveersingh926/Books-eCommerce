import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/books-list/book.model';
import { BooksListService } from 'src/app/shared/books-list.service';

@Component({
  selector: 'app-current-order-item',
  templateUrl: './current-order-item.component.html',
  styleUrls: ['./current-order-item.component.scss']
})
export class CurrentOrderItemComponent implements OnInit {
  @Input() book: Book;
  constructor(private booksListService: BooksListService) { }

  removeBook(event) {
    event.preventDefault();
    this.booksListService.removeSelectedBookToBuy(this.book._id);
  }

  ngOnInit() {
  }

}
