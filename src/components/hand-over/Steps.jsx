import React from 'react';
import ImageGroup from '../utility/ImageGroup';
import hero from '../../assets/Form-Hero-Image.jpg';

export default function Steps() {
    return (
        <ImageGroup
            title='Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM'
            src={hero}
            alt='pluszowy miś'
            fullscreen
        >
            <h2 className='hand-over__title'>Wystarczą 4 proste kroki:</h2>

            <div className='hand-over__steps-wrapper'>
                <div className='hand-over__step'>
                    <div className='hand-over__step-border' />
                    <div className='hand-over__number'>1</div>
                    <div className='hand-over__desc'>Wybierz rzeczy</div>
                </div>
                <div className='hand-over__step'>
                    <div className='hand-over__step-border' />
                    <div className='hand-over__number'>2</div>
                    <div className='hand-over__desc'>Spakuj je w worki</div>
                </div>
                <div className='hand-over__step'>
                    <div className='hand-over__step-border' />
                    <div className='hand-over__number'>3</div>
                    <div className='hand-over__desc'>Wybierz fundację</div>
                </div>
                <div className='hand-over__step'>
                    <div className='hand-over__step-border' />
                    <div className='hand-over__number'>4</div>
                    <div className='hand-over__desc'>Zamów kuriera</div>
                </div>
            </div>
        </ImageGroup>
    );
}
