import React from 'react';

import { ReactComponent as IconGithub } from '../../assets/icons/github-icon.svg';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={classes['footer']}>
			<a href="https://github.com/daramosn/therapist-webpage">
				<IconGithub className={classes['footer__icon']} />
			</a>
			<h5 className={classes['footer__title']}>
				Psychology Specialist: John Doe
			</h5>
			<p className={classes['footer__text']}>
				Welcome to my website for your well-being and personal growth.
			</p>
			<h5 className={classes['footer__title']}>Contact information</h5>
			<p className={classes['footer__text']}>📞 (555) 555-5555</p>
			<p className={classes['footer__text']}>
				📧 info@johndoe-psychologist.com
			</p>
		</div>
	);
};

export default Footer;
