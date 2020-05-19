import About from './About';
import Home from './Home';
import WWS from './WWS';

export const routeDefinitions = [
  { title: 'Home', path: '/', Component: Home },
  { title: 'About', path: '/about', Component: About },
  { title: 'WWS', path: '/wws', Component: WWS },
];
