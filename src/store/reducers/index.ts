import { combineReducers } from "redux";
import { inputReducer } from './inputReducer';
import { booksReducer } from './booksReducer';
import { countReducer } from './countOfRenderReducer';
import { loaderReducer } from './loaderReducer';
import { categoriesReducer } from './categoriesOfBooksReducer';
import { bookReducer } from './bookReducer';


export const rootReducer = combineReducers({
    input: inputReducer,
    booksArr: booksReducer,
    count: countReducer,
    loader: loaderReducer,
    categories: categoriesReducer,
    book: bookReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;