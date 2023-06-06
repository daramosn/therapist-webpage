import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import AboutMe from '../components/AboutMe/AboutMe';
import Features from '../components/Features/Features';

const Home = () => {
	return (
		<>
			<Hero />
			<Services />
			<AboutMe />
			<Features />
		</>
	);
};

export default Home;
