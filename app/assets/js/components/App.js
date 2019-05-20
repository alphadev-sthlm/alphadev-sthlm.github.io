import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Service from './Services';
import Welcome from './Welcome';
import Consultants from './Consultants';
import InstaFeed from './InstaFeed';
import PreFooter from './Pre-footer';
import JoinUs from './JoinUs';
import Contact from './Contact';
import ReactGA from 'react-ga';

export default function () {
  ReactGA.initialize('UA-133865883-1');
  ReactGA.pageview('/');
  return (
    <div>
      <Header />
      <Intro />
      <Welcome />
      <Service />
      <Consultants />
      <JoinUs />
      <InstaFeed />
      <PreFooter />
      <Contact />
    </div>
  );
}
