import React from 'react';

export default function () {
  return (
    <div className="contact-part" id="contact">
      <div className="contact-part__content">

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Jobba hos oss</h3>
          <p className="contact-part__text">Är du själv en socialt och tekniskt kompetent systemutvecklare som funderar på en ny hemvist? Kika in på jobba hos oss, och se om vi kan vara något för dig!</p>
        </div>

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Kontakta oss</h3>
          <p className="contact-part__text">
            Är du i behov av duktiga utvecklare med rätt kompetens och vettiga social skills?
            Hör av dig till <a href="mailto:jon.neergaard@alphadev.se">Jon</a> eller <a href="mailto:johan.windahl@alphadev.se">Johan</a>
          </p>
        </div>

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Adress</h3>
          <p className="contact-part__text">
            Alphadev AB <br/>
            Vasagatan 15<br/>
            111 20 Stockholm<br/>
            <i className="fa fa-phone"/> +46 (0) 702 - 96 00 05<br/>
            <i className="fa fa-envelope-o"/> <a href="mailto:kontakt@alphadev.se">kontakt@alphadev.se</a>
          </p>
        </div>

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Social</h3>
          <div className="social_icon">
            <a href="https://twitter.com/alphadevsthlm">
              <i className="fa fa-3x fa-twitter-square" aria-hidden="true"> </i>
            </a>
            <a href="https://se.linkedin.com/company/alphadev">
              <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"> </i>
            </a>
            <a href="https://www.instagram.com/alphadevsthlm/">
              <i className="fa fa-3x fa-instagram" aria-hidden="true"> </i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
