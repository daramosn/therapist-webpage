import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Header = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Header;
