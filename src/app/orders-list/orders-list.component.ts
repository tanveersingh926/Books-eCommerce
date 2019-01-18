import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  ordersHistory: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('ordersHistory')
      .subscribe(
        (data) => {
          this.ordersHistory = data.ordersHistory;
        }
      );
  }

}
