import React from 'react';
import ContentGroup from '../components/utility/ContentGroup';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Register() {
	const validationSchema = yup.object({
		email: yup.string().email('Podany email jest nieprawidłowy!').required(),
		password: yup
			.string()
			.min(8, 'Podane hasło jest za krótkie!')
			.required('Hasło jest wymagane!'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Hasła muszą być takie same!')
			.required('Musisz potwierdzić hasło!'),
	});

	return (
		<section className='user-auth'>
			<ContentGroup title='Zarejestruj się'>
				<Formik
					initialValues={{ email: '', password: '', confirmPassword: '' }}
					validationSchema={validationSchema}
					onSubmit={() => {}}
				>
					<Form className='form'>
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

							<div className='form__input-wrapper'>
								<label htmlFor='confirmPassword' className='form__label'>
									Potwierdź hasło
								</label>
								<Field
									className='form__input'
									type='password'
									name='confirmPassword'
								/>
								<ErrorMessage
									className='form__error-message'
									name='confirmPassword'
									component='div'
								/>
							</div>
						</div>

						<div className='user-auth__btn-wrapper'>
							<Link href='/logowanie'>
								<a className='user-auth__btn btn btn--small btn--lowercase btn--borderless'>
									Zaloguj się
								</a>
							</Link>

							<input
								className='user-auth__btn btn btn--small btn--lowercase'
								type='submit'
								value='Załóż konto'
							/>
						</div>
					</Form>
				</Formik>
			</ContentGroup>
		</section>
	);
}
