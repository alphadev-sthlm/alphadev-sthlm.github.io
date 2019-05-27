import React from 'react';

export default function Contact() {
  return (
    <div className="contact-part" id="contact">
      <div className="contact-part__content">

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Social</h3>
          <div className="social-icon">		  
            {/*<a href="https://twitter.com/alphadevsthlm">
              <i className="fa fa-3x fa-twitter-square" aria-hidden="true"> </i>
            </a>*/}
            <a href="https://se.linkedin.com/company/alphadev">
              <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"> </i>
            </a>
            <a href="https://www.instagram.com/alphadevsthlm/">
              <i className="fa fa-3x fa-instagram" aria-hidden="true"> </i>
            </a>
          </div>
        </div>

        <div className="contact-part__column">
          <h3 className="contact-part__headline">Adress</h3>
          <p className="contact-part__text">
            Alphadev AB<br/>
            Kungsgatan 6<br/>
            111 43 Stockholm<br/>
            <i className="fa fa-phone"/> +46 (0) 8 - 520 277 70<br/>
            <i className="fa fa-envelope-o"/> <a href="mailto:kontakt@alphadev.se">kontakt@alphadev.se</a>
          </p>
        </div>

      </div>
    </div>
  );
}
