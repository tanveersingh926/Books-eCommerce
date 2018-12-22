import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BooksListService } from 'src/app/books-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(
    private booksListService: BooksListService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  buyNow () {
    this.booksListService.bookTobuy(this.book);
    this.router.navigate(['/checkout']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.bookId = +params['id'];

      this.booksListService.getBook(this.bookId).subscribe((data: Book) => {
        this.book = data;
      });
    });
  }

}
