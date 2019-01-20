import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'books', component: BooksListComponent},
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'checkout', component: CheckoutComponent , canActivate: [AuthGuard]},
  { path: 'my-orders', loadChildren: './orders-list/orders-list.module#OrdersListModule' },
  { path: '**', redirectTo: 'books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
