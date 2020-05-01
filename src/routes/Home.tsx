import { RouteComponentProps } from '@reach/router';
import React from 'react';

import pages from '../pages';

const Home: React.FC<RouteComponentProps> = () => <>{pages.home}</>;

export default Home;
