import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContentGroup from '../utility/ContentGroup';

export default function Steps() {
	return (
		<section id='steps'>
			<ContentGroup title='Wystarczą 4 proste kroki' fluid>
				<div className='steps'>
					{[
						['/Icon-1.svg', 'Wybierz rzeczy', 'ubrania, zabawki, sprzęt i inne'],
						['/Icon-2.svg', 'Spakuj je', 'skorzystaj z worków na śmieci'],
						['/Icon-3.svg', 'Zdecyduj komu chcesz pomóc', 'wybierz zaufane miejsce'],
						['/Icon-4.svg', 'Zamów kuriera', 'kurier przyjedzie w dogodnym momencie'],
					].map(([src, title, desc], index) => (
						<div key={index} className='steps__col'>
							<div className='steps__icon'>
								<Image src={src} alt='' role='presentation' layout='fill' />
							</div>

							<h2 className='steps__title'>{title}</h2>

							<div className='steps__division' />

							<p className='steps__description'>{desc}</p>
						</div>
					))}
				</div>

				<Link href='/logowanie'>
					<a className='btn'>Oddaj rzeczy</a>
				</Link>
			</ContentGroup>
		</section>
	);
}
