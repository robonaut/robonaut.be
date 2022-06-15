import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getContent } from '../content';

const NotFound: React.FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect((): void => {
    document.title = t('navigation.404.title');
  }, []);

  return <>{getContent('404')}</>;
};

export default NotFound;
