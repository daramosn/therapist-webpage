import React from 'react';

import happyFamily from '../../assets/images/family.webp';
import { ReactComponent as IconPhone } from '../../assets/icons/phone-solid.svg';

import classes from './Benefits.module.scss';

const Benefits = () => {
	return (
		<section className={classes['benefits']}>
			<img
				className={classes['benefits__figure']}
				src={happyFamily}
				alt="family"
			/>
			<div className={classes['benefits__info']}>
				<h3 className={classes['benefits__title']}>
					Benefits of psychological therapy
				</h3>

				<p className={classes['benefits__description']}>
					Therapy is a transformative process that can bring about
					numerous benefits and improve various aspects of your life.
				</p>

				<div>
					<h3>Supportive Environment</h3>
					<p>
						Therapy provides a non-judgmental and confidential space
						where individuals can express themselves freely, feeling
						heard, validated, and understood by a trained
						professional.
					</p>
				</div>
				<div>
					<h3>Personalized Approach</h3>
					<p>
						Therapy is tailored to the unique needs of each
						individual, focusing on their specific challenges,
						goals, and strengths. It offers personalized strategies
						and interventions to promote growth, healing, and
						self-discovery.
					</p>
				</div>
				<div className={classes['benefits__phone']}>
					<IconPhone className={classes['benefits__phone-icon']} />
					<span> (555) 555-5555</span>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
