import React from 'react';

import classes from './Contact.module.scss';
import Button from '../../common/Button/Button';

const Contact = () => {
	return (
		<div className={classes['contact']}>
			<h3 className={classes['contact__title']}>Contact us</h3>
			<div className={classes['contact__grid']}>
				<div className={classes['contact__info']}>
					<p className={classes['contact__info-description']}>
						We would love to hear from you! Feel free to reach out
						to us using the contact form provided below. Whether you
						have questions, want to schedule an appointment, or
						simply need more information, our team is ready to
						assist you.
					</p>

					<h5 className={classes['contact__info-subtitle']}>
						Contact information:
					</h5>
					<ul>
						<li className={classes['contact__info-list-item']}>
							📞 (555) 555-5555
						</li>
						<li className={classes['contact__info-list-item']}>
							📧 info@johndoe-psychologist.com
						</li>
						<li className={classes['contact__info-list-item']}>
							🕙 Monday - Friday: 8 AM - 4PM
						</li>
						<li className={classes['contact__info-list-item']}>
							🗺️ 65 Street, Network City, NYPD
						</li>
					</ul>
				</div>

				<form className={classes['contact__form']}>
					<label
						className={classes['contact__form-label']}
						htmlFor="name"
					>
						Name
					</label>
					<input
						className={classes['contact__form-input']}
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name..."
					/>

					<label
						className={classes['contact__form-label']}
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className={classes['contact__form-text']}
						name="message"
						id="message"
						placeholder="Enter your message..."
					></textarea>

					<Button className={classes['contact__form-button']}>
						Send!
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
