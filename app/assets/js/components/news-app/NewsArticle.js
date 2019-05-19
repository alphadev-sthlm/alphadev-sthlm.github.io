import React from 'react';
import {connect} from 'react-redux';

class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const article = this.props.news.find((newsItem) => newsItem.id === this.props.newsId) || {};

    let bodyContent = '';
    if (Array.isArray(article.body)) {
      bodyContent = article.body.join();
    } else if (typeof article.body === 'string') {
      bodyContent = article.body;
    }
    return (
      <div className="news-article">
        <div className={`news-article__content${ article.title ? ' news-article__content--loaded' : ''}`}>
          <a href={'/'}>Tillbaka</a>
          <small>{article.date}</small>
          <h2 className="news-article__headline">{article.title}</h2>
          <h4>{article.ingress}</h4>
          <p dangerouslySetInnerHTML={{__html: article.ingress}}/>
          <div dangerouslySetInnerHTML={{__html: bodyContent}}/>
        </div>
      </div>
    );
  }
}

NewsArticle.defaultProps = {
  id: 0,
  news: []
};

export default connect((state) => {
  return {news: state.data.news};
})(NewsArticle);
