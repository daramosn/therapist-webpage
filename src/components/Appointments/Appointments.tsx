import appointments from '../../assets/images/appointments.webp';
import { ReactComponent as IconPhone } from '../../assets/icons/phone-solid.svg';

import classes from './Appointments.module.scss';

const Appointments = () => {
	return (
		<section className={classes['appointments']}>
			<img
				className={classes['appointments__image']}
				src={appointments}
				alt="depressed-person"
			/>
			<h4 className={classes['appointments__title']}>
				Open for appointments
			</h4>
			<div className={classes['appointments__phone']}>
				<IconPhone className={classes['appointments__icon']} />
				<span> (555) 555-5555</span>
			</div>
		</section>
	);
};

export default Appointments;
