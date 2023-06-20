import { ReactComponent as HappyHeadIcon } from '../../assets/icons/happy.svg';
import { ReactComponent as PlantIcon } from '../../assets/icons/planting.svg';
import takingNotePsy from '../../assets/images/mission.webp';
import classes from './MissionSection.module.scss';

const MissionSection = () => {
	return (
		<section className={classes['mission']}>
			<div className={classes['mission__info']}>
				<h4 className={classes['mission__title']}>
					Psychology specialist
				</h4>
				<h2 className={classes['mission__name']}>Dr. John Doe</h2>
				<p className={classes['mission__description']}>
					Sample text sample text sample text sample text sample text
					sample text sample text
				</p>
				<div className={classes['mission__info-card']}>
					<HappyHeadIcon
						className={classes['mission__info-card-icon']}
					/>
					<div className={classes['mission__info-card-text']}>
						<h3>Mission</h3>
						<p>
							sample text sample text sample text sample text
							sample text sample text sample text sample text
						</p>
					</div>
				</div>
				<div className={classes['mission__info-card']}>
					<PlantIcon className={classes['mission__info-card-icon']} />
					<div className={classes['mission__info-card-text']}>
						<h3>Vision</h3>
						<p>
							sample text sample text sample text sample text
							sample text sample text sample text sample text
						</p>
					</div>
				</div>
			</div>

			<img
				className={classes['mission__figure']}
				src={takingNotePsy}
				alt="notes-psychologist"
			/>
		</section>
	);
};

export default MissionSection;
