import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className='topnav'>
                <div className='topnav__auth'>
                    <Link className='topnav__link topnav__link--alt' to='/logowanie'>
                        Zaloguj
                    </Link>
                    <Link className='topnav__link topnav__link--alt' to='/rejestracja'>
                        Załóż konto
                    </Link>
                </div>

                <ul className='topnav__main'>
                    <li>
                        <a className='topnav__link' href='#start'>
                            Start
                        </a>
                    </li>
                    <li>
                        <a className='topnav__link' href='#data'>
                            O co chodzi?
                        </a>
                    </li>
                    <li>
                        <a className='topnav__link' href='#about-us'>
                            O nas
                        </a>
                    </li>
                    <li>
                        <a className='topnav__link' href='#helping'>
                            Fundacja i organizacje
                        </a>
                    </li>
                    <li>
                        <a className='topnav__link' href='#contact'>
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
