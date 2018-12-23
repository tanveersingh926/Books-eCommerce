import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksListService } from 'src/app/books-list.service';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss']
})
export class CurrentOrderComponent implements OnInit, OnChanges {
  selectedBooks: Book[];
  cartDetail: any;

  constructor(private booksListService: BooksListService) { }

  ngOnInit() {
    this.selectedBooks = this.booksListService.selectedBooksToBuy();
    this.cartDetail = this.booksListService.shoppingCartDetail();
  }

  ngOnChanges() {
  }

}
