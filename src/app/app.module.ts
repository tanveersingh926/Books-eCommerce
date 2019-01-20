import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment'; // Angular CLI environemnt
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { BooksEffects } from './books-list/store/books.effects';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './books-list/book-item/book-item.component';
import { BooksListService } from './shared/books-list.service';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';

import { HTTPListener, HTTPStatus } from './auth/http.interceptor';

import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderItemComponent } from './orders-list/order-item/order-item.component';

import { reducers } from './store/app.reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CheckoutModule } from './checkout/checkout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    OrdersListComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CheckoutModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([BooksEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
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
