import * as OrdersHistoryActions from './orders-list.actions';
import { SingleOrder } from '../../shared/single-order';

export interface State {
   ordersHistory: SingleOrder[];
}

const initialState = {
    ordersHistory: []
};

export function OrdersHistoryReducer(state = initialState, action: OrdersHistoryActions.OrdersHistoryActions) {
    switch (action.type) {
        case OrdersHistoryActions.ADD_TO_HISTORY:
            return {
                ...state,
                ordersHistory: [
                    ...state.ordersHistory,
                    action.payload
                ]
            };

        default:
            return state;
    }
}
