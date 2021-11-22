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

function Main({ booksArr }: MainProps) {
    const dispatch = useDispatch();
    const { multiplyCount } = bindActionCreators(actionCreators, dispatch);
    const count = useSelector((state: State) => state.count);
    const loader = useSelector((state: State) => state.loader);

    // <Preloader loader={loader} />
    return (
        (
            booksArr.length === 1 ?
                null
                :
                <section className='main'>
                    <div className='main__content'>
                        {
                            booksArr.items
                                .slice(0, count)
                                .map((item) => (
                                    <Card
                                        card={item}
                                    />
                                ))
                        }
                    </div>
                    <button className='main__button' onClick={() => multiplyCount(30)}>Еще</button>
                </section>
        )
    );
}

export default Main;