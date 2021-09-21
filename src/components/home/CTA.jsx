import React from 'react';
import decoration from '../../assets/Decoration.svg';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <div className='cta'>
            <h1 className='cta__title'>
                Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
            </h1>

            <img className='cta__decoration' src={decoration} alt='' />

            <div>
                <Link to='/' className='btn'>
                    Oddaj rzeczy
                </Link>
                <Link to='/' className='btn'>
                    Zorganizuj zbiórkę
                </Link>
            </div>
        </div>
    );
}
