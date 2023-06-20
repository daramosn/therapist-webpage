import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';
import Logo from './components/Logo';

const Navbar = () => {
	return (
		<ul className={classes['navbar']}>
			<li className={classes['navbar__logo']}>
				<Link to={'/'}>
					<Logo />
				</Link>
			</li>

			<div className={classes['navbar__links']}>
				<li>
					<Link className={classes['navbar__link']} to={'/about'}>
						About
					</Link>
				</li>
				<li>
					<Link className={classes['navbar__link']} to={'contact'}>
						Contact us
					</Link>
				</li>
				<li>
					<Link className={classes['navbar__link']} to={'pricing'}>
						Pricing
					</Link>
				</li>
			</div>
		</ul>
	);
};

export default Navbar;
