import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksListService } from 'src/app/shared/books-list.service';
import { Book } from 'src/app/books-list/book.model';
import { ShoppingCart } from 'src/app/shared/shopping-cart.model';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss']
})
export class CurrentOrderComponent implements OnInit, OnChanges {
  selectedBooks: Book[];
  cartDetail: ShoppingCart;

  constructor(private booksListService: BooksListService) { }

  ngOnInit() {
    this.selectedBooks = this.booksListService.selectedBooksToBuy();
    this.cartDetail = this.booksListService.shoppingCartDetail();
  }

  ngOnChanges() {
  }

}
