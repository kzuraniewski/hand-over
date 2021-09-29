import React from 'react';
import colData from '../../data/threecols.data';

export default function ThreeCols() {
    return (
        <section className='three-cols'>
            {colData.map(({ number, title, description }, index) => (
                <div key={index} className='three-cols__col'>
                    <div className='three-cols__number'>{number}</div>
                    <h3 className='three-cols__title'>{title}</h3>
                    <p className='three-cols__description'>{description}</p>
                </div>
            ))}
        </section>
    );
}
