import React from 'react';

import classes from './AboutMe.module.scss';

const AboutMe = () => {
	return (
		<section className={classes['about-me']}>
			<h4 className={classes['about-me__title']}>ABOUT ME</h4>
			<div className={classes['about-me__information']}>
				<div>
					<h1 className={classes['about-me__degree']}>
						Clinic Expert Psychologist from New York
					</h1>
					<p className={classes['about-me__degree-description']}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do mod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
				<div>
					<h2 className={classes['about-me__service']}>
						Psychologist Issues
					</h2>
					<p className={classes['about-me__service-description']}>
						Sample text. Click to select the text box. Click again
						or double click to start editing the text.
					</p>
					<h2 className={classes['about-me__service']}>
						Relationship Issues
					</h2>
					<p className={classes['about-me__service-description']}>
						Sample text. Click to select the text box. Click again
						or double click to start editing the text.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
