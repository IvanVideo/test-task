import { useDispatch } from 'react-redux';
import { actionCreators } from '../../store';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
    card: any
}

function Card({ card }: CardProps) {
    const dispatch = useDispatch();
    const { getBookArr } = bindActionCreators(actionCreators, dispatch);

    return (
        <Link 
        to='/book'
            onClick={() => {getBookArr(card)}}
            >
            <section className='card'>
                <img className='card__img' src={card.volumeInfo.imageLinks.thumbnail} />
                <p className='card__category card-text'>{card.volumeInfo.categories}</p>
                <h3 className='card__name card-text'>{card.volumeInfo.title}</h3>
                <p className='card__autor card-text'>{card.volumeInfo.authors}</p>
            </section>
        </Link>
    );
}

export default Card;