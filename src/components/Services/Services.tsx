import React from 'react';

import { ReactComponent as emotionalIcon } from '../../assets/emotional.svg';
import { ReactComponent as handsIcon } from '../../assets/heart-hands.svg';
import { ReactComponent as heartIcon } from '../../assets/heart.svg';

import Service from './components/Service/Service';

import classes from './Services.module.scss';

const Services = () => {
	return (
		<section className={classes['services']}>
			<Service
				title={'Anxiety disorder'}
				description={
					'Sample text. Click to select the text box. Click again or double click to start editing the text.'
				}
				icon={handsIcon}
			/>
			<Service
				className={classes['services--background']}
				title={'Anxiety disorder'}
				description={
					'Sample text. Click to select the text box. Click again or double click to start editing the text.'
				}
				icon={emotionalIcon}
			/>
			<Service
				title={'Anxiety disorder'}
				description={
					'Sample text. Click to select the text box. Click again or double click to start editing the text.'
				}
				icon={heartIcon}
			/>
		</section>
	);
};

export default Services;
