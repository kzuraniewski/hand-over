import React from 'react';
import decoration from '../../assets/Decoration.svg';

export default function ContentGroup({ title, children }) {
    return (
        <div className='content-group'>
            <h1 className='content-group__title'>Skontaktuj się z nami</h1>

            <img
                src={decoration}
                alt=''
                role='presentation'
                className='content-group__decoration'
            />

            {children}
        </div>
    );
}
