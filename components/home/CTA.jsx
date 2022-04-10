import React from 'react';
import Link from 'next/link';
import ContentGroup from '../utility/ContentGroup';

export default function CTA() {
	return (
		<section id='start' className='cta'>
			<div className='cta__hero' />

			<div className='cta__content-container'>
				<ContentGroup
					title={['Zacznij pomagać!', 'Oddaj niechciane rzeczy w zaufane ręce']}
					fluid
				>
					<div>
						<Link href='/logowanie'>
							<a className='btn'>Oddaj rzeczy</a>
						</Link>
						<Link href='/logowanie'>
							<a className='btn'>Zorganizuj zbiórkę</a>
						</Link>
					</div>
				</ContentGroup>
			</div>
		</section>
	);
}
