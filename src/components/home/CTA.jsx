import React from 'react';
import { Link } from 'react-router-dom';
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
						<Link to='/logowanie' className='btn'>
							Oddaj rzeczy
						</Link>
						<Link to='/logowanie' className='btn'>
							Zorganizuj zbiórkę
						</Link>
					</div>
				</ContentGroup>
			</div>
		</section>
	);
}
