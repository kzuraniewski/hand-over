import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from './Decoration';
import tshirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import magnifier from '../../assets/Icon-3.svg';
import loop from '../../assets/Icon-4.svg';

//TODO
// function Step({ src, title, desc }) {
//     return (
//         <div className='steps__col'>
//             <img src={src} alt='' role='presentation' className='steps__icon' />
//             <h2 className='steps__title'>{title}</h2>
//             <Decoration small />
//             <p className='steps__description'>{desc}</p>
//         </div>
//     );
// }

export default function Steps() {
    return (
        <div className='content-group'>
            <h1 className='content-group__title'>Wystarczą 4 proste kroki</h1>

            <Decoration />

            <div className='steps'>
                {[
                    [tshirt, 'Wybierz rzeczy', 'ubrania, zabawki, sprzęt i inne'],
                    [bag, 'Spakuj je', 'skorzystaj z worków na śmieci'],
                    [magnifier, 'Zdecyduj komu chcesz pomóc', 'wybierz zaufane miejsce'],
                    [loop, 'Zamów kuriera', 'kurier przyjedzie w dogodnym momencie'],
                ].map(([src, title, desc]) => (
                    <div className='steps__col'>
                        <img src={src} alt='' role='presentation' className='steps__icon' />
                        <h2 className='steps__title'>{title}</h2>
                        <Decoration small />
                        <p className='steps__description'>{desc}</p>
                    </div>
                ))}
            </div>

            <Link className='btn' to='/oddaj-rzeczy'>
                Oddaj rzeczy
            </Link>
        </div>
    );
}
