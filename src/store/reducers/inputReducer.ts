import { inputValueState, inputValueActionTypes, inputValueAction } from '../../types/input';

const initialState: inputValueState = {
    inputValue: '',
}

export const inputReducer = (state = initialState, action: inputValueAction): inputValueState => {
    switch (action.type) {
        case inputValueActionTypes.INPUT_VALUE:
            return { inputValue: action.payload }
        default:
            return state
    }
}