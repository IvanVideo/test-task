import React from 'react';
import './App.css';
import Header from '../Header/Header';
import booksApi from '../../utils/api';
import Main from '../Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';


function App() {
  const dispatch = useDispatch();
  const { getBooksArr } = bindActionCreators(actionCreators, dispatch);
  const { changeStatus } = bindActionCreators(actionCreators, dispatch);
  const books = useSelector((state: State) => state.booksArr);

  const getBooks = (data: String) => {
    booksApi.getBooks(data)
      .then((res) => {
        // changeStatus(false);
        getBooksArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Header getBooks={getBooks} />
      <Main booksArr={books} />
    </div>
  );
}

export default App;
