import React from 'react';
import './App.css';
// import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import booksApi from '../../utils/api';
import Main from '../Main/Main';


function App() {
  const [booksArr, setBooksArr] = React.useState([]);

  // const store = createStore()

  const getBooks = (data: String) => {
    booksApi.getBooks(data)
      .then((res) => {
        setBooksArr(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Header getBooks={getBooks} />
      <Main booksArr={booksArr} />
    </div>
  );
}

export default App;
