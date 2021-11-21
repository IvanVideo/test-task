import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import { useEffect } from 'react';

interface MainProps {
    booksArr: Array<[]>,
}

function Main({ booksArr }: MainProps) {
    console.log(booksArr, 'a0a00a')
    return (
        <section className='main'>
            {
                booksArr.items.map((item: Array<MainProps>) => (
                    <Card
                        card={item}
                    />
                ))
            }
        </section>
    );
}

export default Main;