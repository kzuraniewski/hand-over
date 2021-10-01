import React, { useState, useRef } from 'react';
import ContentGroup from '../utility/ContentGroup';
import { validatePassword, validateEmail } from '../../validation';
import { Link } from 'react-router-dom';

export default function Login() {
    const [showError, setShowError] = useState({ email: false, password: false });
    const inputRefs = {
        email: useRef(null),
        password: useRef(null),
    };

    const handleSubmit = e => {
        e.preventDefault();

        setShowError(() => {
            const [emailValue, passwordValue] = Object.values(inputRefs).map(
                ref => ref.current.value
            );

            return {
                email: !validateEmail(emailValue),
                password: !validatePassword(passwordValue),
            };
        });
    };

    return (
        <section className='user-auth'>
            <ContentGroup title='Zaloguj się'>
                <form className='form' onSubmit={e => handleSubmit(e)}>
                    {/* input */}
                    <div className='user-auth__input-wrapper'>
                        <label className='form__label'>
                            Email
                            <input ref={inputRefs.email} type='text' className='form__input' />
                            {showError.email && (
                                <div className='form__error-message'>
                                    Podany email jest nieprawidłowy!
                                </div>
                            )}
                        </label>
                        <label className='form__label'>
                            Hasło
                            <input ref={inputRefs.password} type='text' className='form__input' />
                            {showError.password && (
                                <div className='form__error-message'>
                                    Podane hasło jest za krótkie!
                                </div>
                            )}
                        </label>
                    </div>

                    {/* buttons  */}
                    <div className='user-auth__btn-wrapper'>
                        <Link
                            to='/rejestracja'
                            className='user-auth__btn btn btn--small btn--lowercase btn--borderless'
                        >
                            Załóż konto
                        </Link>

                        <input
                            className='user-auth__btn btn btn--small btn--lowercase'
                            type='submit'
                            value='Zaloguj się'
                        />
                    </div>
                </form>
            </ContentGroup>
        </section>
    );
}
