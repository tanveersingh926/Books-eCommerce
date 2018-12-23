import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/books-list/book.model';
import { BooksListService } from 'src/app/shared/books-list.service';
import { Router } from '@angular/router';

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

  buyNow (event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.booksListService.bookTobuy(this.book);
    this.router.navigate(['/checkout']);

  }
  ngOnInit() {}

}
