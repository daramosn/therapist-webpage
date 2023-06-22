import React from 'react';

import Button from '../../common/Button/Button';
import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={classes['hero']}>
			<h1 className={classes['hero--margin-0']}>Psychology specialist</h1>
			<h3 className={classes['hero--margin-0']}>John Doe</h3>
			<p className={classes['hero--margin-0']}>
				Welcome to my website, a space dedicated to your well-being and
				personal growth.
			</p>

			<form
				onSubmit={(e) => e.preventDefault()}
				className={classes['hero__form']}
			>
				<input
					className={classes['hero__input']}
					type="email"
					name="email"
					id="email"
					placeholder="email..."
				/>
				<Button className={classes['hero__button']}>Contact me</Button>
			</form>
		</div>
	);
};

export default Hero;
