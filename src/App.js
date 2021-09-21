import 'tailwindcss/dist/base.css';
import 'styles/globalStyles.css';
import React from 'react';
import Hero from 'components/hero/TwoColumnWithFeaturesAndTestimonial.js';
import Features from 'components/features/VerticalWithAlternateImageAndText.js';
import Footer from 'components/footers/MiniCenteredFooter';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
	return (
		<div className='App'>
			<Router>
				<Hero />
				<Features />
				<Footer />
			</Router>
		</div>
	);
}
