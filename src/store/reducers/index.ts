import { combineReducers } from "redux";
import { inputReducer } from './inputReducer';
import { booksReducer } from './booksReducer';
import { countReducer } from './countOfRenderReducer';
import { loaderReducer } from './loaderReducer';
import { categoriesReducer } from './categoriesOfBooksReducer';


export const rootReducer = combineReducers({
    input: inputReducer,
    booksArr: booksReducer,
    count: countReducer,
    loader: loaderReducer,
    categories: categoriesReducer,
})

export default rootReducer;

export type  State = ReturnType<typeof rootReducer>;