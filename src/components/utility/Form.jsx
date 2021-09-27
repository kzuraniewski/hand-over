import React from 'react';

export function FormInput({ label, placeholder = '' }) {
    return (
        <label className='form__label'>
            {label}
            <input type='text' className='form__input' placeholder={placeholder} />
        </label>
    );
}

export function FormTextarea({ label, placeholder = '' }) {
    return (
        <label className='form__label'>
            {label}
            <textarea
                className='form__input'
                name={label}
                cols={30}
                rows={7}
                placeholder={placeholder}
            />
        </label>
    );
}

export function FormRow({ children }) {
    return <div className='form__row'>{children}</div>;
}

export function Form({ children }) {
    return <form className='form'>{children}</form>;
}
