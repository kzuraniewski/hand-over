import React from 'react';
import decoration from '../../assets/Decoration.svg';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <div id='start' className='cta'>
            <div className='cta__hero' />

            <div className='cta__content-container'>
                <div className='cta__content'>
                    <h1 className='cta__title'>
                        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                    </h1>

                    <img className='cta__decoration' src={decoration} alt='' />

                    <div>
                        <Link to='/logowanie' className='btn'>
                            Oddaj rzeczy
                        </Link>
                        <Link to='/logowanie' className='btn'>
                            Zorganizuj zbiórkę
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
