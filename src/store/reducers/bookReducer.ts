import { ActionBookPage } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = [{}]

export const bookReducer = (state = initialState, action: ActionBookPage) => {
    switch (action.type) {
        case ActionTypes.BOOK_PAGE:
            return action.payload
        default:
            return state
    }
}