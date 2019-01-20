import { Component, OnInit, Input } from '@angular/core';
import { SingleOrder } from '../../shared/single-order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: SingleOrder;
  constructor() { }

  ngOnInit() {
  }

}
