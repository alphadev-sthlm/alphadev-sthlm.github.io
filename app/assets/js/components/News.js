import React from 'react';
import {connect} from 'react-redux';

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  news() {
    return this.props.news.map((newsItem) => {
      return (
        <div key={newsItem.title + newsItem.date} className="news-part__column">
          <h3 className="news-part__headline">{newsItem.title}</h3>
          <small>{newsItem.date}</small>
          <p>{newsItem.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="news-part">
        <div className="news-part__content news-part__content--headline">
          <h2 className="news-part__headline">
            <span className="news-part__headline--highlighted">Nytt</span> hos oss
          </h2>
        </div>
        <div className="news-part__content">
          {this.news.bind(this)()}
        </div>
      </div>
    );
  }
}

News.defaultProps = {
  news: []
};

export default connect((state) => {
  return { news: state.data.news };
})(News);
