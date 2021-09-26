import React from 'react';

export default function ImageGroup({ src, alt, overlay = false, children }) {
    return (
        <div className={`grid image-group${overlay ? ' image-group--overlay' : ''}`}>
            <img className='image-group__image' src={src} alt={alt} />

            <div className='image-group__content'>{children}</div>
        </div>
    );
}
