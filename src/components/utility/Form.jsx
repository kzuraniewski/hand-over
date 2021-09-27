import React from 'react';

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.placeholder = '']
 */
export function FormInput({ label, placeholder = '' }) {
    return (
        <label className='form__label'>
            {label}
            <input type='text' className='form__input' placeholder={placeholder} />
        </label>
    );
}

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.placeholder = '']
 */
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

/**
 * @param {object} props
 * @param {string} props.label
 */
export function FormSubmit({ label }) {
    return <input className='btn btn--small form__submit' type='submit' value={label} />;
}

export function FormRow({ children }) {
    return <div className='form__row'>{children}</div>;
}

export function Form({ children }) {
    return <form className='form'>{children}</form>;
}
