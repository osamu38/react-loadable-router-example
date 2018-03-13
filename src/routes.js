import React from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import fakeDelay from './helpers/fakeDelay';

export const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: (props) => <Loading {...props} />,
});
export const About = Loadable({
  loader: () => fakeDelay(2000).then(() => import('./components/About')),
  loading: (props) => <Loading {...props} />,
});
export const News = Loadable({
  loader: () => import('./components/News'),
  loading: (props) => <Loading {...props} />,
});
