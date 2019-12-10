import { createMemoryNavigation } from 'navi';
import React, { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { Router, View } from 'react-navi';

import { routes } from './routes';

const App: React.StatelessComponent<{}> = () => (
  <Router routes={routes}>
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </Router>
);

export default App;

export const renderStatic = async (
  url: string
): Promise<{ body: string; title: string }> => {
  const navigation = createMemoryNavigation({
    routes,
    url,
  });
  const currentRoute = await navigation.getRoute();
  const body = renderToString(
    <Router navigation={navigation}>
      <View />
    </Router>
  );

  return { body, title: currentRoute.title };
};
