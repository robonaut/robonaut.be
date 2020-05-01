import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { home } from '../markdown';
import { MainTitle } from '../style/layout';

console.log(home);

const Home: React.FC<RouteComponentProps> = () => <MainTitle>Home</MainTitle>;

export default Home;
