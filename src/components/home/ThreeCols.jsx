import React from 'react';
import colData from '../../data/threecols.data';
import Container from '../utility/Container';

export default function ThreeCols() {
	return (
		<section className='three-cols'>
			<Container className='three-cols__wrapper'>
				{colData.map(({ number, title, description }, index) => (
					<div key={index} className='three-cols__col'>
						<div className='three-cols__number'>{number}</div>
						<h3 className='three-cols__title'>{title}</h3>
						<p className='three-cols__description'>{description}</p>
					</div>
				))}
			</Container>
		</section>
	);
}
