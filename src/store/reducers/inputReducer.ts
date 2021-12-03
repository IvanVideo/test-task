import { ActionInput } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = ''

export const inputReducer = (state = initialState, action: ActionInput) => {
    switch (action.type) {
        case ActionTypes.INPUT_VALUE:
            return action.payload
        default:
            return state
    }
}