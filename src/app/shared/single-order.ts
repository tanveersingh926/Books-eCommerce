import { Book } from 'src/app/books-list/book.model';

export interface ShippingDetails {
    isAddressAvailable: boolean;
    address: Address;
}

export interface Address {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;
}

export interface PaymentDetails {
    subTotal: number;
    shipping: number;
    tax: number;
    paymentMethod: string;
    total: number;
}

export interface OrderStatus {
    status: string;
    shippedOn: Date;
}

export interface SingleOrder {
    selectedBooks: Book[];
    shippingDetails: ShippingDetails;
    paymentDetails: PaymentDetails;
    orderStatus: OrderStatus;
}
