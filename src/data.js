import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Services from './views/Services';
import Values from './views/Values';
import ApiExplain from './views/ApiExplain';

// You can change the order of links here
export const menu = {
	home: {
		path: '/',
		name: 'Home',
		component: Home
	},
	services: {
		path: '/services',
		name: 'Services',
		component: Services
	},
	whatsanapi: {
		path: '/whats-an-api',
		name: 'Whats an API?',
		component: ApiExplain
	},
	values: {
		path: '/values',
		name: 'Values',
		component: Values
	},
	about: {
		path: '/about',
		name: 'About',
		component: About
	},
	contact: {
		path: '/contact',
		name: 'Contact',
		component: Contact
	}
}