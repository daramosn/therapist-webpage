import React from 'react';

import bgImageKid from '../../assets/images/kid_1.webp';

import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={classes['hero']}>
			<img
				className={classes['hero__bg-image']}
				src={bgImageKid}
				alt="background-img__kid"
			/>
			<div className={classes['hero__description']}>
				<div className={classes['hero__description-text']}>
					<h1 className={classes['hero--no-margin']}>
						Psychology specialist
					</h1>
					<h3 className={classes['hero--no-margin']}>John Doe</h3>
					<p className={classes['hero--no-margin']}>
						Welcome to my website, a space dedicated to your
						well-being and personal growth.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
