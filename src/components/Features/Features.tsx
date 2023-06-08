import officeImage from '../../assets/images/features_1.jpg';
import avatarImage from '../../assets/images/therapist-photo.jpg';
import Comment from './components/Comment/Comment';

import { ReactComponent as HeartCheck } from '../../assets/icons/heart-circle-check-solid.svg';

import classes from './Features.module.scss';

const Features = () => {
	return (
		<div className={classes['features']}>
			<div className={classes['features__review']}>
				<img
					className={classes['features__review-image']}
					src={officeImage}
					alt={'ofice-table'}
				/>
				<Comment
					className={classes['features__review-comment']}
					avatar={avatarImage}
					textComment={
						'Sample text. Click to select the text box. Click again or double click to start editing the text.'
					}
					name={'Sarah Wilson'}
				/>
			</div>

			<div className={classes['features__properties']}>
				<div className={classes['features__properties-item']}>
					<HeartCheck
						className={classes['features__properties-item-icon']}
					/>
					<p className={classes['features__properties-item-title']}>
						Affordable and Flexible Therapy
					</p>
				</div>
				<div
					className={`${classes['features__properties-item']} ${classes['features--bg']}`}
				>
					<HeartCheck
						className={classes['features__properties-item-icon']}
					/>
					<p className={classes['features__properties-item-title']}>
						Emergency and Crisis Availability
					</p>
				</div>
				<div className={classes['features__properties-item']}>
					<HeartCheck
						className={classes['features__properties-item-icon']}
					/>
					<p className={classes['features__properties-item-title']}>
						Convenient Scheduling Options
					</p>
				</div>
				<div className={classes['features__properties-item']}>
					<HeartCheck
						className={classes['features__properties-item-icon']}
					/>
					<p className={classes['features__properties-item-title']}>
						In-person and Online Therapy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
