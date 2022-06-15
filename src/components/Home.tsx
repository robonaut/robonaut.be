import type React from 'react';

import { getContent } from '../content';

const Home: React.FunctionComponent = (): JSX.Element | null => {
  return getContent('home');
};

export default Home;
