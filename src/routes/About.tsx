import { RouteComponentProps } from '@reach/router';
import React from 'react';

import pages from '../pages';

const About: React.FC<RouteComponentProps> = () => <>{pages.about}</>;

export default About;
