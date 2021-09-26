import React from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import magnifier from '../../assets/Icon-3.svg';
import loop from '../../assets/Icon-4.svg';
import ContentGroup from '../utility/ContentGroup';

export default function Steps() {
    return (
        <section id='steps'>
            <ContentGroup title='Wystarczą 4 proste kroki'>
                <div className='steps'>
                    {[
                        [tshirt, 'Wybierz rzeczy', 'ubrania, zabawki, sprzęt i inne'],
                        [bag, 'Spakuj je', 'skorzystaj z worków na śmieci'],
                        [magnifier, 'Zdecyduj komu chcesz pomóc', 'wybierz zaufane miejsce'],
                        [loop, 'Zamów kuriera', 'kurier przyjedzie w dogodnym momencie'],
                    ].map(([src, title, desc], index) => (
                        <div key={index} className='steps__col'>
                            <img src={src} alt='' role='presentation' className='steps__icon' />
                            <h2 className='steps__title'>{title}</h2>

                            <div className='steps__division' />

                            <p className='steps__description'>{desc}</p>
                        </div>
                    ))}
                </div>

                <Link className='btn' to='/logowanie'>
                    Oddaj rzeczy
                </Link>
            </ContentGroup>
        </section>
    );
}
