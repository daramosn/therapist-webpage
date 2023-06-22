import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import AboutMe from '../components/AboutMe/AboutMe';
import Features from '../components/Features/Features';
import Appointments from '../components/Appointments/Appointments';
import MissionSection from '../components/MissionSection/MissionSection';
import Pricing from '../components/Pricing/Pricing';

const Home = () => {
	return (
		<>
			<Hero />
			<Services />
			<AboutMe />
			<Features />
			<MissionSection />
			<Appointments />
			<Pricing />
		</>
	);
};

export default Home;
