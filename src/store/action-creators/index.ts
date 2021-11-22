import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { ActionInput } from "../actions/index";
import { ActionBook } from "../actions/index";
import { ActionCount } from "../actions/index";
import { ActionLoader } from "../actions/index";

export const getInputValue = (amount: String) => {
    return (dispatch: Dispatch<ActionInput>) => {
        dispatch({
            type: ActionTypes.INPUT_VALUE,
            payload: amount
        })
    }
}

export const getBooksArr = (amount: any) => {
    return (dispatch: Dispatch<ActionBook>) => {
        dispatch({
            type: ActionTypes.BOOKS_ARRAY,
            payload: amount
        })
    }
}

export const multiplyCount = (amount: Number) => {
    return (dispatch: Dispatch<ActionCount>) => {
        dispatch({
            type: ActionTypes.COUNT_OF_RENDER,
            payload: amount
        })
    }
}

export const changeStatus = (amount: Boolean) => {
    return (dispatch: Dispatch<ActionLoader>) => {
        dispatch({
            type: ActionTypes.LOADER,
            payload: amount
        })
    }
}