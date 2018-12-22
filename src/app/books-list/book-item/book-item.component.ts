import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BooksListService } from 'src/app/books-list.service';
import { Router } from '@angular/router';
import { ElementHandleEventFn } from '@angular/core/src/view';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  constructor(
    private booksListService: BooksListService,
    private router: Router
  ) { }

  buyNow (event) {
    event.stopPropagation();
    event.preventDefault();
    this.booksListService.bookTobuy(this.book);
    this.router.navigate(['/checkout']);

  }
  ngOnInit() {}

}
