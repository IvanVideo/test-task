import { ActionCategories } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = 'all'

export const categoriesReducer = (state = initialState, action: ActionCategories) => {
    switch (action.type) {
        case ActionTypes.CATEGORIES:
            return state
        default:
            return state
    }
}