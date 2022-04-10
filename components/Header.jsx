import React from 'react';
import RouterLink from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
	return (
		<header>
			<nav className='topnav'>
				{/* authorization */}
				<div className='topnav__auth'>
					<RouterLink href='/logowanie'>
						<a className='topnav__link topnav__link--alt'>Zaloguj</a>
					</RouterLink>
					<RouterLink href='/rejestracja'>
						<a className='topnav__link topnav__link--alt'>Załóż konto</a>
					</RouterLink>
				</div>

				{/* scroll */}
				<ul className='topnav__main'>
					{[
						['Start', 'start'],
						['O co chodzi?', 'steps'],
						['O nas', 'about'],
						['Fundacje i organizacje', 'helping'],
						['Kontakt', 'contact'],
					].map(([title, id], index) => (
						<li key={index}>
							<ScrollLink className='topnav__link' to={id} smooth duration={500}>
								{title}
							</ScrollLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
