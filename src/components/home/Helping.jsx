import React, { useState, useRef } from 'react';
import Decoration from './Decoration';
import helpingData from '../../data/helping.data';

export default function Helping() {
    const selectLabels = [useRef(null), useRef(null), useRef(null)];
    const [selectionIndex, setSelectionIndex] = useState(0);

    const { intro, records } = helpingData[selectionIndex];

    return (
        <div className='content-group helping'>
            <h1 className='content-group__title'>Komu pomagamy?</h1>

            <Decoration />

            {/* select labels */}
            <div className='helping__select'>
                {['Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom'].map(
                    (label, index) => {
                        const ref = selectLabels[index];

                        return (
                            <button
                                ref={ref}
                                key={index}
                                className={`helping__select-label${
                                    selectionIndex === index
                                        ? ' helping__select-label--selected'
                                        : ''
                                }`}
                                onClick={() => setSelectionIndex(index)}
                            >
                                {label}
                            </button>
                        );
                    }
                )}
            </div>

            {/* selected helping card */}
            <div className='helping__card'>
                <p className='helping__description'>{intro}</p>

                {/* organisations */}
                <div className='helping__records-wrapper'>
                    {records?.map(({ title, tags, description }, recordIndex) => (
                        <div key={recordIndex} className='helping__record'>
                            <div>
                                <h2 className='helping__record-title'>{title}</h2>
                                <span className='helping__record-description'>{description}</span>
                            </div>

                            <span className='helping__record-tags'>{tags?.join(', ')}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
