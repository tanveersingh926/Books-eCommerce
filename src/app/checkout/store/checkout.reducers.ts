import * as CheckoutActions from './checkout.actions';
import { Book } from 'src/app/books-list/book.model';
import * as singleOrder from '../../shared/single-order';

export interface State {
    selectedBooks: Book[];
    shippingDetails: singleOrder.ShippingDetails;
    paymentDetails: singleOrder.PaymentDetails;
    orderStatus: singleOrder.OrderStatus;
}

const initialState = {
    selectedBooks: [],
    shippingDetails: {
        isAddressAvailable: false, // true,
        address: {
            firstName: '', // 'Tanveer',
            lastName: '', // 'Singh',
            addressLine1: '', // 'abc',
            addressLine2: '', // 'def',
            city: '', // 'Amritsar',
            state: '', // 'Punjab',
            zip: '' // '143001'
        }
    },
    paymentDetails: {
        subTotal: 0,
        shipping: 400,
        tax: 200,
        paymentMethod: 'COD',
        total: 0
    },
    orderStatus: {
        status: 'Shipped',
        shippedOn: null,

    }
};

export function CheckoutReducer(state = initialState, action: CheckoutActions.CheckoutActions) {
    switch (action.type) {
        case CheckoutActions.ADD_BOOK:
            return {
                ...state,
                selectedBooks: [
                    ...state.selectedBooks,
                    action.payload
                ],
            };

        case CheckoutActions.REMOVE_BOOK:
            const bookId = action.payload;
            const updatedSelectedBooks = state.selectedBooks.filter(
                (book: Book) => {
                    if (book._id === bookId) {
                        return false;
                    }
                    return true;
                }
            );
            return {
                ...state,
                selectedBooks: updatedSelectedBooks
            };

        case CheckoutActions.UPDATE_PAYMENT_DETAILS:
            let booksPrice = 0;
            state.selectedBooks.map(
                (book: Book) => {
                    booksPrice += +book.price;
                }
            );

            const newPaymentDetails = {
                ...state.paymentDetails,
                subTotal: booksPrice,
                total: booksPrice
                    + state.paymentDetails.shipping
                    + state.paymentDetails.tax
            };
            return {
                ...state,
                paymentDetails: newPaymentDetails
            };

        case CheckoutActions.COMPLETE_PURCHASE:
            return {
                ...initialState
            };

        case CheckoutActions.CANCEL_PURCHASE:
            return {
                ...initialState
            };

        case CheckoutActions.UPDATE_ADDRESS:
            return {
                ...state,
                shippingDetails: {
                    isAddressAvailable: true,
                    address: action.payload
                }
            };

        case CheckoutActions.EDIT_ADDRESS:
            return {
                ...state,
                shippingDetails: {
                    ...state.shippingDetails,
                    isAddressAvailable: false,
                }
            };

        default:
            return state;
    }
}
