import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';

interface MainProps {
    booksArr: {
        items: [],
        kind: String,
        totalItems: Number,
        length: any,
    }
}

interface Container {
    container: Element
}

function Main({ booksArr }: MainProps) {
    const dispatch = useDispatch();
    const { multiplyCount } = bindActionCreators(actionCreators, dispatch);
    const { getBooksArr } = bindActionCreators(actionCreators, dispatch);
    const count = useSelector((state: State) => state.count);
    const loader = useSelector((state: State) => state.loader);
    const categories = useSelector((state: State) => state.categories);
    console.log(categories)


    // <Preloader loader={loader} />

    return (
        (
            booksArr.length === 1 ?
                null
                :
                <section className='main'>
                    <p className='main__counterc'>Всего книг в базе {booksArr.totalItems}</p>
                    <div className='main__content'>
                        {
                            booksArr.items
                                .slice(0, count)
                                .map((item) => (
                                    <Card
                                        key={Math.random()}
                                        card={item}
                                    />
                                ))
                        }
                    </div>
                    <button className='main__button' onClick={() => { multiplyCount(30) }}>Еще</button>
                </section>
        )
    );
}

export default Main;