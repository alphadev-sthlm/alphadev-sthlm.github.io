import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  news() {
    if (this.props.news.length === 0) return (<div>Det finns inga nyheter</div>);

    return this.props.news
      .slice(this.props.page * this.props.pageSize, this.props.pageSize)
      .map((newsItem) => {
        return (
          <div key={newsItem.title + newsItem.date}
            className={`news-part__column${ this.props.fullsize ? ' news-part__column--fullsize' : ''}`}>
            <a href={`/news/?id=${newsItem.id}`}><img src={newsItem.image}/></a>
            <div className="news-part__bottom">
              <h3 className="news-part__headline">{newsItem.title}</h3>
              <small>{newsItem.date}</small>
              <p className="news-part__text" dangerouslySetInnerHTML={{__html: newsItem.ingress}}/>
              {newsItem.body && <a href={`/news/?id=${newsItem.id}`}>Läs mer</a>}
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div className={`news-part${ this.props.fullsize ? ' news-part--fullsize' : ''}`}>
        <div className="news-part__content news-part__content--headline">
          <h2 className="news-part__headline">
            Senaste <span className="news-part__headline--highlighted">nytt</span>
          </h2>
        </div>
        <div className={`news-part__content${ this.props.fullsize ? ' news-part__content--fullsize' : ''}`}>
          {this.news.bind(this)()}
        </div>
      </div>
    );
  }
}

News.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  fullsize: PropTypes.bool,
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    ingress: PropTypes.string,
    body: PropTypes.arrayOf(PropTypes.string),
  }))
};

News.defaultProps = {
  page: 0,
  pageSize: 3,
  fullsize: false,
  news: []
};

export default connect((state) => {
  return {news: state.data.news};
})(News);
