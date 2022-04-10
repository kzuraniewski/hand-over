import React, { useRef, useState } from 'react';
import ImageGroup from '../utility/ImageGroup';
import { validateName, validateEmail } from '../../lib/validation';

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

					//clear input fields
					for (const key in inputRefs) inputRefs[key].current.value = '';
				})
				.catch(err => console.error(err));
		} else setShowSubmitSuccess(false);
	};

	return (
		<section id='contact' className='contact'>
			<ImageGroup
				title='Skontaktuj się z nami'
				src='/Background-Contact-Form.jpg'
				alt='ubrania'
				overlay
			>
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
							rows={5}
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
