import { Action } from '@ngrx/store';

export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export class AddToHistory implements Action {
    readonly type = ADD_TO_HISTORY;

    constructor(public payload: {}) {}
}

export type OrdersHistoryActions = AddToHistory ;
