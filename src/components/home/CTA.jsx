import React from 'react';
import Decoration from './Decoration';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <div id='start' className='cta'>
            <div className='cta__hero' />

            <div className='cta__content-container'>
                <div className='content-group'>
                    <h1 className='content-group__title'>
                        Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                    </h1>

                    <Decoration />

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
