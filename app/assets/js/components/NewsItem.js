import React from 'react';

class NewsItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="news-item">
        <h3 className="news-item__title">{this.props.title}</h3>
        {this.props.image && <img className="news-item__image" src={this.props.image}/>}
        <p className="news-item__text">{this.props.text}</p>
      </div>
    );
  }
}

export default NewsItem;
