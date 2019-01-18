import { Component, Input } from '@angular/core';
import { Book } from 'src/app/books-list/book.model';
import { Router } from '@angular/router';
import { BooksListService } from 'src/app/shared/books-list.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book: Book;
  constructor(
    private router: Router,
    private booksListService: BooksListService
  ) { }

  buyNow (event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.booksListService.buyBook(this.book);

    this.router.navigate(['/checkout']);
  }

}
