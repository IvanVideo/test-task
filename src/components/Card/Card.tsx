import './Card.css';

interface CardProps {
    card: any,
}

function Card({ card }: CardProps) {

    return (
        <section className='card'>
            <img className='card__img' src={card.volumeInfo.imageLinks.thumbnail} />
            <p className='card__category card-text'>{card.volumeInfo.categories}</p>
            <h3 className='card__name card-text'>{card.volumeInfo.title}</h3>
            <p className='card__autor card-text'>{card.volumeInfo.authors}</p>
        </section>
    );
}

export default Card;