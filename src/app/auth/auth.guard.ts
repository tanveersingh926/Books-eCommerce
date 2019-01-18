import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksListService } from '../shared/books-list.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private booksListService: BooksListService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.store.select('checkout')
        .pipe(
          map(data => {
            if (!data.selectedBooks.length) {
              this.router.navigate(['/books']);
              return false;
            }

            return true;
          })
        );

  }
}
