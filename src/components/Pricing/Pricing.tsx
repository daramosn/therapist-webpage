import React from 'react';

import Product from './Product/Product';

import classes from './Pricing.module.scss';

const DUMMY_PRODUCTS = [
	{
		id: '1',
		title: '🍂 Initial consultation',
		price: 5,
		features: [
			'30 minutes',
			'Complimentary introductory session',
			'Assess needs and establish therapeutic relationship',
			'Create personalized therapy plan',
		],
	},
	{
		id: '2',
		title: '👩‍💼 Individual therapy session',
		price: 30,
		features: [
			'60 minutes',
			'Tailored one-on-one sessions',
			'Develop coping strategies and techniques',
			'Track progress and evaluate treatment goals',
		],
	},
	{
		id: '3',
		title: '💑 Couples therapy session',
		price: 35,
		features: [
			'60 minutes',
			'Improve relationship dynamics',
			'Resolve conflicts and enhance communication',
			'Strengthen emotional connection',
		],
	},
	{
		id: '4',
		title: '👪 Family therapy session',
		price: 35,
		features: [
			'60 minutes',
			'Address family dynamics and relationships',
			'Promote understanding and empathy',
			'Enhance family functioning',
		],
	},
];

const Pricing = () => {
	return (
		<div className={classes['pricing']}>
			<h4 className={classes['pricing__title']}>Pricing plans</h4>
			<p className={classes['pricing__description']}>
				Investing in your mental health and well-being is a valuable
				step towards personal growth. I offer flexible pricing options
				to ensure accessibility and affordability for everyone. Please
				see below for my current pricing structure:
			</p>

			<ul className={classes['pricing__products']}>
				{DUMMY_PRODUCTS.map((product) => (
					<Product
						key={product.id}
						title={product.title}
						price={product.price}
						features={product.features}
					/>
				))}
			</ul>
		</div>
	);
};

export default Pricing;
