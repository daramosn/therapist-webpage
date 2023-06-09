import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Logo from './components/Logo';
import { ReactComponent as LogoTwitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as LogoFacebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as LogoInstagram } from '../../assets/icons/instagram.svg';

import classes from './Navbar.module.scss';

const Navbar = () => {
	const resetScrollHandler = () => {
		window.scrollTo(0, 0);
	};

	return (
		<motion.ul
			animate={{ y: [10, 0, 4, 0] }}
			transition={{ duration: 0.5 }}
			className={classes['navbar']}
		>
			<li className={classes['navbar__logo']}>
				<Link onClick={resetScrollHandler} to={'/'}>
					<Logo />
				</Link>
			</li>

			<div className={classes['navbar__links']}>
				<li>
					<Link
						onClick={resetScrollHandler}
						className={classes['navbar__link']}
						to={'/blog'}
					>
						Blog
					</Link>
				</li>

				<li className={classes['navbar__brand-logo']}>
					<LogoTwitter />
				</li>
				<li className={classes['navbar__brand-logo']}>
					<LogoFacebook />
				</li>
				<li className={classes['navbar__brand-logo']}>
					<LogoInstagram />
				</li>
			</div>
		</motion.ul>
	);
};

export default Navbar;
