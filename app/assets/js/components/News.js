import React from 'react';
import {connect} from 'react-redux';
import NewsItem from './NewsItem';


class News extends React.Component {

  render() {
    return (
      <div className="news-part">
      <h1>Senaste nytt</h1>
      {this.props.news && this.props.news.map((item, i) =>
        <NewsItem key={`news-item${i}`} title={item.title} image={item.image} text={item.text}/>
      )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.dir(state);
  return {
    news: state.data.news
  };
}

export default connect(mapStateToProps)(News);
