import { Component, OnInit, ViewChild } from '@angular/core';
import { StatesList } from 'src/app/shared/data-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  shippingAddress = {};
  states;
  @ViewChild('f') shippingForm: NgForm;

  constructor(private statesList: StatesList) { }

  ngOnInit() {
    this.states = this.statesList.getStates();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(form);
  }

  onClear() {
    this.shippingForm.reset();
  }

}
