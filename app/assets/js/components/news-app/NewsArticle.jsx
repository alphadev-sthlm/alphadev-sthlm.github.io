import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const article = this.props.news.find((newsItem) => newsItem.id === this.props.newsId) || {};

    return (
      <div className="news-article">
        <div className={`news-article__content${article.title ? ' news-article__content--loaded' : ''}`}>
          <a href={'/'}>Tillbaka</a>
          <img src={article.image}></img>
          <small>{article.date}</small>
          <h2 className="news-article__headline">{article.title}</h2>
          <p className="news-article__ingress"
             dangerouslySetInnerHTML={{__html: article.ingress}}/>
          {article.body && article.body.map((paragraph) => <p dangerouslySetInnerHTML={{__html: paragraph}}/>)}
        </div>
      </div>
    );
  }
}

NewsArticle.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({})),
  newsId: PropTypes.string,
};
NewsArticle.defaultProps = {
  id: 0,
  news: []
};

export default connect((state) => {
  return {news: state.data.news};
})(NewsArticle);
