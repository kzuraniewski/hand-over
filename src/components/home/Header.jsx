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
                    <li>
                        <ScrollLink className='topnav__link' to='#start'>
                            Start
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='topnav__link' to='#data'>
                            O co chodzi?
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='topnav__link' to='#about-us'>
                            O nas
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='topnav__link' to='#helping'>
                            Fundacja i organizacje
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='topnav__link' to='#contact'>
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
