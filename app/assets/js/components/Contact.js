import React from "react";

export default function () {
  return (
    <div className="contact-part" id="contact">
      <div className="contact-part__content">
        <div className="contact-part__column">
          <h3 className="contact-part__headline">Join us now</h3>
          <p className="contact-part__text">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
        </div>
        <div className="contact-part__column">
          <h3 className="contact-part__headline">Contact us</h3>
          <p className="contact-part__text">Alphadev AB <br/> Vasagatan 15<br/> 111 20 Stockholm<br/>+46 (0) 702 - 96 00 05</p>
        </div>
        <div className="contact-part__column">
          <h3 className="contact-part__headline">Quick links</h3>
          <p className="contact-part__text">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
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
