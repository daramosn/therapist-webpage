import React from 'react';

import bgImageKid from '../../assets/kid_1.jpg';

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
					<h3 className={classes['hero--no-margin']}>Pepito Perez</h3>
					<p className={classes['hero--no-margin']}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam et id rerum atque voluptates distinctio
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
