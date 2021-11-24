import React from 'react';
import './App.css';
import Header from '../Header/Header';
import booksApi from '../../utils/api';
import Main from '../Main/Main';
import BookPage from '../BookPage/BookPage';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import { Router, Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route
          path="/book"
          element={<BookPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
