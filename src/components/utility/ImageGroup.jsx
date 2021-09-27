import React from 'react';
import ContentGroup from './ContentGroup';

export default function ImageGroup({ title, src, alt, overlay = false, children }) {
    return (
        <div className={`grid image-group${overlay ? ' image-group--overlay' : ''}`}>
            <img className='image-group__image' src={src} alt={alt} />

            <div className='image-group__content'>
                <ContentGroup title={title}>{children}</ContentGroup>
            </div>
        </div>
    );
}
