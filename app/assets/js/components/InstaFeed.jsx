import React from 'react';
/*

// Needs access token.
// Instagram requires Privacy Policy URL before processing requests for API access

import Instafeed from 'instafeed.js';

const feed = new Instafeed({
  get: 'user',
  userId: 'alphadevsthlm',
  clientId: '2d64085cf1604bb7a0611d775bcea823',
  filter: function (/!*image*!/) {
    return true;//image.tags.indexOf('TAG_NAME') >= 0;
  },
  template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
*/

export default class InstaFeed extends React.Component {

  render() {
    return (
      <div id="instafeed"></div>
    );
  }
}

