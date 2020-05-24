import About from './About';
import Home from './Home';
import Projects from './Projects';
// import WWS from './WWS';

export const routeDefinitions = [
  { title: 'Home', path: '/', Component: Home },
  { title: 'About', path: '/about', Component: About },
  { title: 'Projects', path: '/projects', Component: Projects },
  // { title: 'WWS', path: '/wws', Component: WWS },
];
