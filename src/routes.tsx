import { mount, route } from 'navi';
import React from 'react';

export const routeDefinitions = {
  '/': route({
    title: 'Home',
    getData: () => ({}),
    view: <div>Home</div>,
  }),
  '/about': route({
    title: 'About',
    getData: () => ({}),
    view: <div>About</div>,
  }),
};

export const routes = mount(routeDefinitions);
