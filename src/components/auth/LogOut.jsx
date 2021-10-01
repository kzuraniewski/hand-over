import React from 'react';
import ContentGroup from '../utility/ContentGroup';
import { Link } from 'react-router-dom';

export default function LogOut() {
    return (
        <section className='user-auth'>
            <ContentGroup title='Wylogowanie nastąpiło pomyślnie!'>
                <Link className='user-auth__btn btn btn--small btn--lowercase' to='/'>
                    Strona główna
                </Link>
            </ContentGroup>
        </section>
    );
}
