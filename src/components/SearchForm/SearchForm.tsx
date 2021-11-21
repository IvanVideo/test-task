import './SearchForm.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputTypesSelector } from '../../hooks/inputTypesSelector';
import { Dispatch } from 'redux';
import { inputValueAction, inputValueActionTypes } from '../../types/input';
import { type } from 'os';

interface HeaderProps {
    getBooks: Function,
}

function SearchForm({ getBooks }: HeaderProps) {
    const [inputValue, setInputValue] = React.useState('');

    // const state = inputTypesSelector(state => state.input)

    // console.log(state, '1')
    React.useEffect(() => {

    }, [inputValue])

    const handleInputValue = (e: any) => {
        setInputValue(e.target.value);
    }

    // const handleSubmitForm = (e: React.FormEvent, dispatch: Dispatch<inputValueAction>) => {
    //     e.preventDefault();
    //     dispatch({ type: inputValueActionTypes.INPUT_VALUE, payload: inputValue })
    // }

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        getBooks(inputValue);
        // console.log(inputValue)
    }

    return (
        <form className='form' onSubmit={handleSubmitForm}>
            <input className="form__input" placeholder="Книги" onChange={handleInputValue} />
            <input className="form__button" type="submit" value="Поиск" />
            <div className='form__column'>
                <div className='form__box'>
                    <p className='form__text'>Categories</p>
                    <select className='form__select'>
                        <option>all</option>
                        <option>art</option>
                        <option>biography</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                </div>
                <div className='form__box'>
                    <p className='form__text'>Sorting by</p>
                    <select className='form__select'>
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;