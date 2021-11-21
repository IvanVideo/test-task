export interface inputValueState {
    inputValue: String,
}

export enum inputValueActionTypes {
    INPUT_VALUE = 'INPUT_VALUE'
}

export interface inputValueAction {
    type: inputValueActionTypes.INPUT_VALUE,
    payload?: any;
}