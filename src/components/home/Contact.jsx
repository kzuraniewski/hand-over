import React, { useRef, useState } from 'react';
import pile from '../../assets/Background-Contact-Form.jpg';
import ImageGroup from '../utility/ImageGroup';

export default function Contact() {
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        message: useRef(null),
    };

    const [showSubmitSuccess, setShowSubmitSuccess] = useState(false);
    const [showError, setShowError] = useState({ name: false, email: false, message: false });
    const updateError = obj =>
        setShowError(old => {
            let t = { ...old, ...obj };
            return t;
        });

    const validateEmail = email => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(email).toLowerCase());
    };

    const validateName = name => name.length && !name.trim().includes(' ');

    const validateMessage = message => message.length >= 120;

    const handleSubmit = e => {
        e.preventDefault();

        const [name, email, message] = Object.values(inputRefs).map(ref => ref.current.value);
        const t = {
            name: !validateName(name),
            email: !validateEmail(email),
            message: !validateMessage(message),
        };
        updateError(t);

        if (!(t.name || t.email || t.message)) {
            console.log('submit');
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => {
                    setShowSubmitSuccess(json.status === 'success');
                    console.log(json);
                });
        }
    };

    return (
        <section id='contact' className='contact'>
            <ImageGroup title='Skontaktuj się z nami' src={pile} alt='ubrania' overlay>
                <form className='form' onSubmit={e => handleSubmit(e)}>
                    {showSubmitSuccess && (
                        <div className='form__success'>
                            Wiadomość została wysłana! Wkrótce się skontaktujemy.
                        </div>
                    )}

                    <div className='form__row'>
                        <label className='form__label'>
                            Wpisz swoje imię
                            <input
                                ref={inputRefs.name}
                                type='text'
                                className='form__input'
                                placeholder='Krzysztof'
                            />
                            {showError.name && (
                                <div className='form__error-message'>
                                    Podane imię jest nieprawidłowe!
                                </div>
                            )}
                        </label>
                        <label className='form__label'>
                            Wpisz swój email
                            <input
                                ref={inputRefs.email}
                                type='text'
                                className='form__input'
                                placeholder='abc@xyz.pl'
                            />
                            {showError.email && (
                                <div className='form__error-message'>
                                    Podany email jest nieprawidłowy!
                                </div>
                            )}
                        </label>
                    </div>

                    <label className='form__label'>
                        Wpisz swoją wiadomość
                        <textarea
                            ref={inputRefs.message}
                            cols={30}
                            rows={4}
                            className='form__input'
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        />
                        {showError.message && (
                            <div className='form__error-message'>
                                Wiadomość musi miec co najmniej 120 znaków!
                            </div>
                        )}
                    </label>

                    <input type='submit' className='btn btn--small form__submit' value='Wyślij' />
                </form>
            </ImageGroup>
        </section>
    );
}
