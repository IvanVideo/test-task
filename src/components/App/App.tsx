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

  const getBooks = (data: String) => {
    booksApi.getBooks(data)
      .then((res) => {
        let newesBook = res.items;
        console.log(newesBook, '1')
      let newad = newesBook.sort(function(a: { volumeInfo: { publishedDate: number; }; }, b: { volumeInfo: { publishedDate: number; }; }){
          return a.volumeInfo.publishedDate - b.volumeInfo.publishedDate;
      })
      console.log(newad, '2')

        // console.log(newesBook.forEach((item: { volumeInfo: { publishedDate: any; }; }) => console.log(item.volumeInfo.publishedDate)), 'res')
        // let booksArtArr = res.items.filter((item: any) => item.volumeInfo.categories.includes("Juvenile Fiction"));
        // console.log(booksArtArr, 'art')
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
