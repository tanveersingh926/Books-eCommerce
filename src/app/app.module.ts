import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './books-list/book-item/book-item.component';
import { BooksListService } from './books-list.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderItemComponent } from './orders-list/order-item/order-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    CheckoutComponent,
    OrdersListComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BooksListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
