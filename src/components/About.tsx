import React from 'react';

import { getContent } from '../content';
import { StyledAboutPage } from '../style/about';

const About: React.FunctionComponent = (): JSX.Element | null => {
  return <StyledAboutPage>{getContent('about')}</StyledAboutPage>;
};

export default About;
