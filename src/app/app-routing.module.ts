import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  // { path: '/books', component: BooksListComponent, pathMatch: 'full'},
  { path: 'books', component: BooksListComponent},
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'my-orders', component: OrdersListComponent },
  { path: '**', redirectTo: 'books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
