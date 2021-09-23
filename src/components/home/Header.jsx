import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
    return (
        <header>
            <nav className='topnav'>
                {/* authorization */}
                <div className='topnav__auth'>
                    <RouterLink className='topnav__link topnav__link--alt' to='/logowanie'>
                        Zaloguj
                    </RouterLink>
                    <RouterLink className='topnav__link topnav__link--alt' to='/rejestracja'>
                        Załóż konto
                    </RouterLink>
                </div>

                {/* scroll */}
                <ul className='topnav__main'>
                    {[
                        ['Start', 'start'],
                        ['O co chodzi?', 'steps'],
                        ['O nas', 'about'],
                        ['Fundacje i organizacje', 'helping'],
                        ['Kontakt', 'contact'],
                    ].map(([title, id]) => (
                        <li>
                            <ScrollLink className='topnav__link' to={id} smooth duration={500}>
                                {title}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
