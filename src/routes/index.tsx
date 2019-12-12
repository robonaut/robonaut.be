import { RouteComponentProps } from '@reach/router';
import React from 'react';

const Home: React.FC<RouteComponentProps> = () => <div>Home</div>;
const About: React.FC<RouteComponentProps> = () => <div>About</div>;

export const routeDefinitions = [
  { title: 'Home', path: '/', Component: Home },
  { title: 'About', path: '/about', Component: About },
];
