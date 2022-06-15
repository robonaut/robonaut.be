import React from 'react';

import { getContent } from '../content';

const Projects = (): JSX.Element | null => {
  return <>{getContent('projects/iqo2')}</>;
};

export default Projects;
