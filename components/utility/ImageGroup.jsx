import React from 'react';
import ContentGroup from './ContentGroup';
import Image from 'next/image';

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.src
 * @param {string} props.alt
 * @param {boolean} [props.overlay = false]
 * @param {boolean} [props.fullscreen = false]
 * @param {*} props.children
 */
export default function ImageGroup({
	title,
	src,
	alt,
	overlay = false,
	fullscreen = false,
	children,
}) {
	return (
		<div
			className={`grid image-group${overlay ? ' image-group--overlay' : ''}${
				fullscreen ? ' image-group--fullscreen' : ''
			}`}
		>
			<Image className='image-group__image' src={src} alt={alt} layout='fill' />

			<div className='image-group__content-wrapper'>
				<ContentGroup title={title}>{children}</ContentGroup>
			</div>
		</div>
	);
}
