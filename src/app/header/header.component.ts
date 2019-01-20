import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  haveBooksToBuy = false;
  @ViewChild('tooltip') tooltip;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.tooltip);
    this.store.select('checkout').subscribe(
      (data) => {
        this.haveBooksToBuy = !!data.selectedBooks.length;
        this.tooltip.disabled = !!data.selectedBooks.length;
      }
    );
  }

  navigateToCheckout() {
    if (!this.haveBooksToBuy) {
      return;
    }
    this.router.navigate(['/checkout']);
  }

}
