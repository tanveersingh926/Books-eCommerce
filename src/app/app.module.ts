import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment'; // Angular CLI environemnt
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './books-list/book-item/book-item.component';
import { BooksListService } from './shared/books-list.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderItemComponent } from './orders-list/order-item/order-item.component';
import { ShippingDetailsComponent } from './checkout/shipping-details/shipping-details.component';
import { CurrentOrderComponent } from './checkout/current-order/current-order.component';
import { CurrentOrderItemComponent } from './checkout/current-order/current-order-item/current-order-item.component';
import { CentsToDollarPipe } from './shared/cents-to-dollar.pipe';

import { HTTPListener, HTTPStatus } from './auth/http.interceptor';

import { BooksEffects } from './books-list/store/books.effects';
// import * as fromBooks from './books-list/store/books.reducers';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    CheckoutComponent,
    OrdersListComponent,
    OrderItemComponent,
    ShippingDetailsComponent,
    CurrentOrderComponent,
    CurrentOrderItemComponent,
    CentsToDollarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([BooksEffects]),
  ],
  providers: [
    HTTPStatus,
    HTTPListener,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    },
    BooksListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
