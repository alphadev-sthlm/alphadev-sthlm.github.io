import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Service from './Services';
import Welcome from './Welcome';
import Consultants from './Consultants';
import InstaFeed from './InstaFeed';
import News from './News';
import PreFooter from './PreFooter';
import Contact from './Contact';
import ReactGA from 'react-ga';

export default function App() {
  ReactGA.initialize('UA-133865883-1');
  ReactGA.pageview('/');
  return (
    <div>
      <Header />
      <Intro />
      <Welcome />
      <Service />
      <Consultants />
      <InstaFeed />
      <News />
      <PreFooter />
      <Contact />
    </div>
  );
}
