import React from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import magnifier from '../../assets/Icon-3.svg';
import loop from '../../assets/Icon-4.svg';

export default function Steps() {
    return (
        <div className='steps'>
            <h1 className='steps__title'>Wystarczą 4 proste kroki</h1>

            <div className='decoration' />

            <div className='steps__cols'>
                <div className='steps__col'>
                    <img src={tshirt} alt='koszulka' className='steps__icon' />
                    <h2 className='steps__title'>Wybierz rzeczy</h2>
                    <p className='steps__description'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='steps__col'>
                    <img src={bag} alt='torba' className='steps__icon' />
                    <h2 className='steps__title'>Spakuj je</h2>
                    <p className='steps__description'>skorzystaj z worków na śmieci</p>
                </div>
                <div className='steps__col'>
                    <img src={magnifier} alt='lupa' className='steps__icon' />
                    <h2 className='steps__title'>Zdecyduj komu chcesz pomóc</h2>
                    <p className='steps__description'>wybierz zaufane miejsce</p>
                </div>
                <div className='steps__col'>
                    <img src={loop} alt='pętla' className='steps__icon' />
                    <h2 className='steps__title'>Zamów kuriera</h2>
                    <p className='steps__description'>kurier przyjedzie w dogodnym momencie</p>
                </div>
            </div>

            <Link className='btn' to='/oddaj-rzeczy'>
                Oddaj rzeczy
            </Link>
        </div>
    );
}
