import { Component, OnInit, ViewChild } from '@angular/core';
import { StatesList } from 'src/app/shared/data-storage.service';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as CheckoutActions from '../store/checkout.actions';
import { Address } from 'src/app/shared/single-order';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  shippingAddress: Address = {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: ''
  };
  states: any;
  editForm = true;
  @ViewChild('shippingForm') shippingForm: NgForm;

  constructor(
    private statesList: StatesList,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.states = this.statesList.getStates();
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.editForm = false;
    this.store.dispatch(new CheckoutActions.UpdateAddress(this.shippingAddress));
  }

  onAddressEdit() {
    this.store.dispatch(new CheckoutActions.EditAddress());
    this.editForm = true;
  }

  onClear() {
    this.shippingForm.reset();
  }

}
