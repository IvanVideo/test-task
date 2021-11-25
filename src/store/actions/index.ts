import { ActionTypes } from '../types/index';

interface InputValue {
    type: ActionTypes.INPUT_VALUE
    payload: String
}

interface BooksArray {
    type: ActionTypes.BOOKS_ARRAY
    payload: {
        booksArr: {
            items: [],
            kind: String,
            totalItems: Number
        }
    }
}

interface CountValue {
    type: ActionTypes.COUNT_OF_RENDER
    payload: Number
}

interface LoaderValue {
    type: ActionTypes.LOADER
    payload: Boolean
}

interface CategoriesValue {
    type: ActionTypes.CATEGORIES
    payload: String
}

interface BookValue {
    type: ActionTypes.BOOK_PAGE
    payload: any
}

export type ActionInput = InputValue
export type ActionBook = BooksArray
export type ActionCount = CountValue
export type ActionLoader = LoaderValue
export type ActionCategories = CategoriesValue
export type ActionBookPage = BookValue


