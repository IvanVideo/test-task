import './SearchForm.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';

interface HeaderProps {
    getBooks: Function,
}

function SearchForm({ getBooks }: HeaderProps) {
    const dispatch = useDispatch();
    const { getInputValue } = bindActionCreators(actionCreators, dispatch);
    const { changeStatus } = bindActionCreators(actionCreators, dispatch);
    const input = useSelector((state: State) => state.input);
    const loader = useSelector((state: State) => state.loader);

    const handleInputValue = (e: any) => {
        getInputValue(e.target.value);
    }

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        changeStatus(true)
        getInputValue(input);
        getBooks(loader);
    }

    return (
        <form className='form' onSubmit={handleSubmitForm}>
            <input className="form__input" placeholder="Книги" onChange={handleInputValue} />
            <input className="form__button" type="submit" value="Поиск" />
            
            {/* <div className='form__column'>
                <div className='form__box'>
                    <p className='form__text'>Categories</p>
                    <select className='form__select' onChange={handleChangeCategories} >
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
            </div> */}
        </form>
    );
}

export default SearchForm;