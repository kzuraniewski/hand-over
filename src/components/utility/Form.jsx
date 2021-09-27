import React, { useEffect, useRef, useState } from 'react';

const defaultErrorMessage = 'To pole nie może być puste';

/**
 * @param {string} value
 * @returns {boolean}
 */
const defaultValidation = value => !value.length;

/**
 * Returns whether the given input is valid
 * @param {object} ref
 * @param {(value: string) => boolean} validation
 */
// const useValidation = ([ref], validation) => {
//     const mount = useRef(true);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         if (mount) return;

//         setError(validation(ref.current.value));
//     }, [ref, validation, ref.current?.value]);

//     return [error];
// };

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.placeholder = '']
 * @param {string} [props.errorMessage = '']
 * @param {(value: string) => boolean} [props.validation = defaultValidation]
 */
export function FormInput({
    label,
    placeholder = '',
    validation = defaultValidation,
    errorMessage = defaultErrorMessage,
}) {
    // const ref = useRef(null);
    // const [showErrorMessage] = useValidation([ref], validation);
    const showErrorMessage = false;

    return (
        <label className='form__label'>
            {label}
            <input type='text' className='form__input' placeholder={placeholder} />
            {showErrorMessage && <div className='form__error-message'>{errorMessage}</div>}
        </label>
    );
}

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.placeholder = '']
 * @param {string} [props.errorMessage = defaultErrorMessage]
 * @param {(value: string) => boolean} [props.validation = defaultValidation]
 */
export function FormTextarea({
    label,
    placeholder = '',
    validation = defaultValidation,
    errorMessage = defaultErrorMessage,
}) {
    // const ref = useRef(null);
    // const [showErrorMessage] = useValidation([ref], validation);
    const showErrorMessage = false;

    return (
        <label className='form__label'>
            {label}
            <textarea
                // ref={ref}
                className='form__input'
                name={label}
                cols={30}
                rows={7}
                placeholder={placeholder}
            />
            {showErrorMessage && <div className='form__error-message'>{errorMessage}</div>}
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
