import { State } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './BookPage.css';

const BookPage = () => {
    const book = useSelector((state: State) => state.book);
    let navigate = useNavigate();

    return (
        <section className='bookPage'>
            <div className='bookPage__conteiner'>
                <div className='bookPage__content'>
                    <div className='bookPage__box'>
                        <p className='bookPage__category card-text'>{book.volumeInfo.categories}</p>
                        <h3 className='bookPage__name card-text'>{book.volumeInfo.title}</h3>
                        <p className='bookPage__autor card-text'>{book.volumeInfo.authors}</p>
                        <p className='bookPage__description'><img className='bookPage__img' src={book.volumeInfo.imageLinks.thumbnail} alt='book' />{book.volumeInfo.description}</p>
                    </div>
                </div>
                <button className='bookPage__button' onClick={() => navigate(-1)}>Назад</button>
            </div>
        </section>
    );
}

export default BookPage;