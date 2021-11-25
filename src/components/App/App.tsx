import './App.css';
import booksApi from '../../utils/api';
import Header from '../Header/Header';
import Main from '../Main/Main';
import BookPage from '../BookPage/BookPage';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { getBooksArr } = bindActionCreators(actionCreators, dispatch);
  const { changeStatus } = bindActionCreators(actionCreators, dispatch);
  const books = useSelector((state: State) => state.booksArr);
  const loader = useSelector((state: State) => state.loader);

  const getBooks = (data: String) => {
    console.log(data, '01001')
    booksApi.getBooks(data)
      .then((res) => {
        changeStatus(false);
        getBooksArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<><Header getBooks={getBooks} /><Main booksArr={books} /></>}>
        </Route>
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
