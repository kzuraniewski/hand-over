import React from 'react';
import Image from 'next/image';
import ContentGroup from '../utility/ContentGroup';

export default function About() {
	return (
		<section className='about'>
			<div className='about__content'>
				<ContentGroup title='O nas'>
					<p className='about__description'>
						Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
						celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
						parsnip.
					</p>

					<div className='about__signature'>
						<Image src='/Signature.svg' alt='signature' layout='fill' />
					</div>
				</ContentGroup>
			</div>

			<div className='about__photo-wrapper'>
				<Image src='/People.jpg' alt='people' className='about__photo' layout='fill' />
			</div>
		</section>
	);
}
