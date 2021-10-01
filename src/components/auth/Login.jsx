import React from 'react';
import ContentGroup from '../utility/ContentGroup';

export default function Login() {
    return (
        <section className='user-auth'>
            <ContentGroup title='Zaloguj się'>
                <form className='form user-auth__form'>
                    <label className='form__label'>
                        Email
                        <input type='text' className='form__input' />
                    </label>
                    <label className='form__label'>
                        Hasło
                        <input type='text' className='form__input' />
                    </label>
                </form>

                <div className='user-auth__btn-wrapper'>
                    <button className='user-auth__btn btn btn--small btn--lowercase btn--borderless'>
                        Załóż konto
                    </button>
                    <button className='user-auth__btn btn btn--small btn--lowercase'>
                        Zaloguj się
                    </button>
                </div>
            </ContentGroup>
        </section>
    );
}
