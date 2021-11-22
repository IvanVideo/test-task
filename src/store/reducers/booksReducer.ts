import { type } from "os";
import { ActionBook } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = [{}]

export const booksReducer = (state = initialState, action: ActionBook) => {
    switch (action.type) {
        case ActionTypes.BOOKS_ARRAY:
            return action.payload
        default:
            return state
    }
}