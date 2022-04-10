import React from 'react';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__empty' />

			<div className='footer__text'>Copyright by Coders Lab</div>

			<div className='footer__icon-wrapper'>
				{/* eslint-disable-next-line */}
				<a href='#' className='footer__icon'>
					<i className='fab fa-facebook-square'></i>
				</a>
				{/* eslint-disable-next-line */}
				<a href='#' className='footer__icon'>
					<i className='fab fa-instagram'></i>
				</a>
			</div>
		</footer>
	);
}
