import React from 'react';

export default class Intro extends React.Component {
  startAnimation() {
    this.refs.introImage.classList.add('intro-part__image--animate');
  }

  render() {
    const subtitle = 'Utveckling - Arkitektur - Agil metodik';

    return (
      <div className="intro-part">
        <div className="intro-part__image" ref="introImage">
          <img src="public/assets/img/image-logo.svg" className="intro-part__banner" onLoad={this.startAnimation.bind(this)}/>
          <span className="intro-part__subtitle">{subtitle}</span>
        </div>
      </div>
    );
  }
}
