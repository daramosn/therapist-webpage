import { motion, Variants } from 'framer-motion';
import { ReactComponent as emotionalIcon } from '../../assets/icons/emotional.svg';
import { ReactComponent as handsIcon } from '../../assets/icons/heart-hands.svg';
import { ReactComponent as heartIcon } from '../../assets/icons/heart.svg';

import Service from './components/Service/Service';

import classes from './Services.module.scss';

// const container: Variants = {
// 	hidden: { opacity: 0, y: '300px' },
// 	show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

const Services = () => {
	return (
		<section className={classes['services']}>
			<Service
				title={'Individual therapy'}
				description={
					'A personalized approach to address your concerns and promote your mental well-being'
				}
				icon={handsIcon}
			/>

			<Service
				className={classes['services--background']}
				title={'Couples therapy'}
				description={
					'Strengthen communication and connection in your relationship'
				}
				icon={emotionalIcon}
			/>

			<Service
				title={'Family Therapy'}
				description={
					"Let's work together to improve family dynamics and relationships"
				}
				icon={heartIcon}
			/>
		</section>
	);
};

export default Services;
