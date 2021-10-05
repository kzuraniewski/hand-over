import React from 'react';
import ContentGroup from '../utility/ContentGroup';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

export default function Login() {
    const validationSchema = yup.object({
        email: yup.string().email('Podany email jest nieprawidłowy!').required(),
        password: yup
            .string()
            .min(8, 'Podane hasło jest za krótkie!')
            .required('Hasło jest wymagane!'),
    });

    return (
        <section className='user-auth'>
            <ContentGroup title='Zaloguj się'>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={() => {}}
                >
                    <Form>
                        <div className='user-auth__inputs-wrapper'>
                            <div className='form__input-wrapper'>
                                <label htmlFor='email' className='form__label'>
                                    Email
                                </label>
                                <Field className='form__input' type='email' name='email' />
                                <ErrorMessage
                                    className='form__error-message'
                                    name='email'
                                    component='div'
                                />
                            </div>

                            <div className='form__input-wrapper'>
                                <label htmlFor='password' className='form__label'>
                                    Hasło
                                </label>
                                <Field className='form__input' type='password' name='password' />
                                <ErrorMessage
                                    className='form__error-message'
                                    name='password'
                                    component='div'
                                />
                            </div>
                        </div>

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
                    </Form>
                </Formik>
            </ContentGroup>
        </section>
    );
}
