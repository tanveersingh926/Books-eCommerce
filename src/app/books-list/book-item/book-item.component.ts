import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  buyNow (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('Buy Now');

  }
  ngOnInit() {}

}
