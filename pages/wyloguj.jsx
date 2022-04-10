import React from 'react';
import ContentGroup from '../components/utility/ContentGroup';
import Link from 'next/link';

export default function LogOut() {
	return (
		<section className='user-auth'>
			<ContentGroup title='Wylogowanie nastąpiło pomyślnie!'>
				<Link href='/'>
					<a className='user-auth__btn btn btn--small btn--lowercase'>Strona główna</a>
				</Link>
			</ContentGroup>
		</section>
	);
}
