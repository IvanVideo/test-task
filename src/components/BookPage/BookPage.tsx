import { actionCreators, State } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import './BookPage.css';

const BookPage = () => {
    const book = useSelector((state: State) => state.book);
    console.log(book, '10101010')
    return (
        <section className='bookPage'>
            <div className='bookPage__conteiner'>
                <img className='bookPage__img' src={book.volumeInfo.imageLinks.thumbnail} />
                <div className='bookPage__box'>
                    <p className='bookPage__category card-text'>{book.volumeInfo.categories}</p>
                    <h3 className='bookPage__name card-text'>{book.volumeInfo.title}</h3>
                    <p className='bookPage__autor card-text'>{book.volumeInfo.authors}</p>
                    <p className='bookPage__description'>{book.volumeInfo.description}</p>
                </div>
            </div>
        </section>
    );
}

export default BookPage;