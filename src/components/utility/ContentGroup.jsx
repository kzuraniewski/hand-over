import React from 'react';
import decoration from '../../assets/Decoration.svg';

export default function ContentGroup({ title, children }) {
    if (Array.isArray(title) && title.length > 1) {
        title = title.map(el => (
            <>
                <br />
                {el}
            </>
        ));
    }

    return (
        <div className='content-group'>
            <h1 className='content-group__title'>{title}</h1>

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
