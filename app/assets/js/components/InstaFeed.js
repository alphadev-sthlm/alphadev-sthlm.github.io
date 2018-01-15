import React from 'react';
/*
import Instafeed from 'instafeed.js';

const feed = new Instafeed({
  get: 'user',
  userId: 'USER_ID',
  filter: function(image) {
        return image.tags.indexOf('TAG_NAME') >= 0;
    },
  template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
*/
export default class InstaFeed extends React.Component {

  render() {
    return (
      <div className="feed"></div>
    );
  }
}

