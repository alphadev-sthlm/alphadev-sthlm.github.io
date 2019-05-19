import React from 'react';
import ReactGA from 'react-ga';
import News from '../News';
import NewsArticle from './NewsArticle';

export default function () {
  ReactGA.initialize('UA-133865883-1');
  ReactGA.pageview('/news');
  const urlSearchParams = new URLSearchParams(window.location.search);

  if (urlSearchParams.get('id')) {
    return (
      <NewsArticle newsId={urlSearchParams.get('id')}/>
    );
  }
  return (
    <News fullsize={true} page={urlSearchParams.get('page')} pageSize={10}/>
  );
}
