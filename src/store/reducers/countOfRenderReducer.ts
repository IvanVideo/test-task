import { type } from "os";
import { ActionCount } from '../actions/index';
import { ActionTypes } from '../types/index';

const initialState = 30

export const countReducer = (state = initialState, action: ActionCount) => {
    switch (action.type) {
        case ActionTypes.COUNT_OF_RENDER:
            return state + state
        default:
            return state
    }
}