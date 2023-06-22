import React, { FC } from 'react';

import Button from '../../../common/Button/Button';

import classes from './Product.module.scss';

type ProductProps = {
	title: string;
	price: number;
	features: string[];
};

const Product: FC<ProductProps> = ({ title, price, features }) => {
	return (
		<li className={classes['product']}>
			<h3 className={classes['product__title']}>{title}</h3>
			<h5 className={classes['product__price']}>${price}</h5>
			<ul className={classes['product__features']}>
				{features.map((feature) => (
					<li
						className={classes['product__features-item']}
						key={feature}
					>
						{feature}
					</li>
				))}
			</ul>
			<Button className={classes['product__button']}>Try it now</Button>
		</li>
	);
};

export default Product;
