import About from './About';
import Home from './Home';
import Projects from './Projects';

export const routeDefinitions = [
  { title: 'Home', path: '/', Component: Home },
  { title: 'About', path: '/about', Component: About },
  { title: 'Projects', path: '/projects', Component: Projects },
];
