import React, { useRef, useState } from 'react';
import ContentGroup from '../utility/ContentGroup';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../validation';

export default function Register() {
    const [showError, setShowError] = useState({
        email: false,
        password1: false,
        password2: false,
    });

    const inputRefs = {
        email: useRef(null),
        password1: useRef(null),
        password2: useRef(null),
    };

    const handleSubmit = e => {
        e.preventDefault();

        setShowError(() => {
            const [emailValue, passwordValue1, passwordValue2] = Object.values(inputRefs).map(
                ref => ref.current.value
            );

            return {
                email: !validateEmail(emailValue),
                password1: !validatePassword(passwordValue1),
                password2: passwordValue1 !== passwordValue2,
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
                            <input
                                ref={inputRefs.password1}
                                type='password'
                                className='form__input'
                            />
                            {showError.password1 && (
                                <div className='form__error-message'>
                                    Podane hasło jest za krótkie!
                                </div>
                            )}
                        </label>
                        <label className='form__label'>
                            Powtórz hasło
                            <input
                                ref={inputRefs.password2}
                                type='password'
                                className='form__input'
                            />
                            {showError.password2 && (
                                <div className='form__error-message'>
                                    Hasła muszą być takie same!
                                </div>
                            )}
                        </label>
                    </div>

                    {/* buttons  */}
                    <div className='user-auth__btn-wrapper'>
                        <Link
                            to='/logowanie'
                            className='user-auth__btn btn btn--small btn--lowercase btn--borderless'
                        >
                            Zaloguj się
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
