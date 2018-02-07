import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Service from './Services';
import Welcome from './Welcome';
import Consultants from './Consultants';
import InstaFeed from './InstaFeed';
import News from './News';
import PreFooter from './Pre-footer';
import Contact from './Contact';

console.log('[AIV]V:{version} Date:{date}[/AIV]');
export default function () {
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
