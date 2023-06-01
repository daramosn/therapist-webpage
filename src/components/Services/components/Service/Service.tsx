import React, { FC, SVGProps } from 'react';

import { ReactComponent as CartIcon } from '../../../../assets/cart.svg';

import classes from './Service.module.scss';

type ServiceProps = {
	title: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	description: string;
	className?: string;
};

const Service: FC<ServiceProps> = ({
	title,
	icon: IconComponent,
	description,
	className,
}) => {
	return (
		<article className={`${classes['service']} ${className}`}>
			<IconComponent className={classes['service__icon']} />
			<h3 className={classes['service__title']}>{title}</h3>
			<p className={classes['service__description']}>{description}</p>

			<p className={classes['service__shipping']}>
				<CartIcon className={classes['service__shipping-cart']} />
				<p>Appointment</p>
			</p>
		</article>
	);
};

export default Service;
