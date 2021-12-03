import { ActionLoader } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = false

export const loaderReducer = (state = initialState, action: ActionLoader) => {
    switch (action.type) {
        case ActionTypes.LOADER:
            return action.payload
        default:
            return state
    }
}