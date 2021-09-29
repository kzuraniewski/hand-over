import React from 'react';
import ContentGroup from '../utility/ContentGroup';

export default function Login() {
    return (
        <section className='user-auth'>
            <ContentGroup title='Zaloguj się'>
                <form className='form user-auth__form'>
                    <input type='text' className='form__input' />
                    <input type='text' className='form__input' />
                </form>

                <div className='user-auth__btn-wrapper'>
                    <button className='btn btn--small btn--lowercase btn--borderless'>
                        Załóż konto
                    </button>
                    <button className='btn btn--small btn--lowercase'>Zaloguj się</button>
                </div>
            </ContentGroup>
        </section>
    );
}
