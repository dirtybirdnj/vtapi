import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Services from './views/Services';
import Values from './views/Values';

// You can change the order of links here
export const menu = {
	home: {
		path: '/',
		name: 'Home',
		component: Home
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
	},
	services: {
		path: '/services',
		name: 'Services',
		component: Services
	},
	values: {
		path: '/values',
		name: 'Values',
		component: Values
	}
}