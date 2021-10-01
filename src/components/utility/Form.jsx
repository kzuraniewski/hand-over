import React, { useEffect, useRef, useState, useContext } from 'react';

const defaultErrorMessage = 'To pole nie może być puste';

/**
 * @param {string} value
 * @returns {boolean}
 */
const defaultValidation = value => !value.length;

const FormContext = React.createContext((ref, validation) => {});

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
    const addInput = useContext(FormContext);
    const ref = useRef(null);
    const showErrorMessage = false;

    useEffect(() => {
        addInput(ref, validation);
    }, [addInput, validation]);

    return (
        <label className='form__label'>
            {label}
            <input ref={ref} type='text' className='form__input' placeholder={placeholder} />
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
    const showErrorMessage = false;

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
    const [inputs, setInputs] = useState([]);

    const addInput = (ref, validation) =>
        // setInputs(inputs => {
        //     let t = { ...inputs };
        //     t[ref] = validation;
        //     return t;
        // });
        setInputs(inputs => {
            let t = [...inputs];
            t.push({ ref, validation });
            return t;
        });

    const handleSubmit = e => {
        e.preventDefault();

        inputs.forEach(({ ref, validation }) => {
            ///???
        });
    };

    return (
        <form className='form' onSubmit={e => handleSubmit(e)}>
            <FormContext.Provider value={addInput}>{children}</FormContext.Provider>
        </form>
    );
}
