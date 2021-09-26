import React, { useState, useRef, useEffect } from 'react';
import helpingData from '../../data/helping.data';
import ContentGroup from '../utility/ContentGroup';

function RecordNavigation({ scopeSize = 3, scopeIndex, setScopeIndex, records }) {
    const buttons = [];

    useEffect(() => {
        for (let i = 0; i < records.length / scopeSize; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`helping__select-label helping__select-label--small${
                        scopeIndex === i ? ' helping__select-label--selected' : ''
                    }`}
                    onClick={() => setScopeIndex(i)}
                >
                    {i + 1}
                </button>
            );
        }
    });

    return buttons.length > 1 ? (
        <div className='helping__select'>{buttons}</div>
    ) : (
        <React.Fragment />
    );
}

export default function Helping() {
    const recordScopeSize = 3;

    const [selectionIndex, setSelectionIndex] = useState(0);
    const [recordScopeIndex, setRecordScopeIndex] = useState(0);
    const selectLabels = [useRef(null), useRef(null), useRef(null)];

    const { intro, records } = helpingData[selectionIndex];

    useEffect(() => {
        setRecordScopeIndex(0);
    }, [selectionIndex]);

    return (
        <section className='helping'>
            <ContentGroup title='Komu pomagamy?'>
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
                        {records
                            .slice(
                                recordScopeSize * recordScopeIndex,
                                recordScopeSize * (recordScopeIndex + 1)
                            )
                            ?.map(({ title, tags, description }, recordIndex) => (
                                <div key={recordIndex} className='helping__record'>
                                    <div>
                                        <h2 className='helping__record-title'>{title}</h2>
                                        <span className='helping__record-description'>
                                            {description}
                                        </span>
                                    </div>

                                    <span className='helping__record-tags'>{tags?.join(', ')}</span>
                                </div>
                            ))}
                    </div>

                    <RecordNavigation
                        scopeSize={3}
                        scopeIndex={recordScopeIndex}
                        setScopeIndex={setRecordScopeIndex}
                        records={records}
                    />
                </div>
            </ContentGroup>
        </section>
    );
}
