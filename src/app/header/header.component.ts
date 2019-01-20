import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Router } from '@angular/router';
import { MatTooltip } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  haveBooksToBuy = false;
  @ViewChild('tooltip') tooltip: MatTooltip;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ) { }

  ngOnInit() {
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
