import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
export {
  Home,
  About,
  Contact,

}