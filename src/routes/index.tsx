import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { MainTitle } from '../style/layout';

const Home: React.FC<RouteComponentProps> = () => <MainTitle>Home</MainTitle>;
const About: React.FC<RouteComponentProps> = () => <MainTitle>About</MainTitle>;

export const routeDefinitions = [
  { title: 'Home', path: '/', Component: Home },
  { title: 'About', path: '/about', Component: About },
];
