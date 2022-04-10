import Image from 'next/image';
import React from 'react';

/**
 * @param {object} props
 * @param {string | string[]} props.title - the title of the content group
 * @param {boolean} [props.fluid = false] - whether the content should be stretched
 * @param {object} props.children
 */
export default function ContentGroup({ title, fluid = false, children }) {
	/**
	 * If the title is an array, then returns it converted to JSX with <br />'s
	 * @returns {JSX.Element[] | string | string[]}
	 */
	const convertedTitle = () => {
		if (Array.isArray(title) && title.length > 1) {
			return title.map((el, index) => (
				<React.Fragment key={index}>
					<br />
					{el}
				</React.Fragment>
			));
		}

		return title;
	};

	return (
		<div className={`content-group`}>
			<h1 className='content-group__title'>{convertedTitle()}</h1>

			<div>
				<Image
					src='/Decoration.svg'
					width={200}
					height={26.09}
					alt=''
					role='presentation'
				/>
			</div>

			<div
				className={`content-group__wrapper${fluid ? ' content-group__wrapper--fluid' : ''}`}
			>
				{children}
			</div>
		</div>
	);
}
