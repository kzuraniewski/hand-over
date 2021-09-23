import React from 'react';
import decoration from '../../assets/Decoration.svg';

export default function Decoration({ small = false }) {
    return (
        <img
            src={decoration}
            alt=''
            role='presentation'
            className={`decoration${small ? ' decoration--small' : ''}`}
        />
    );
}
