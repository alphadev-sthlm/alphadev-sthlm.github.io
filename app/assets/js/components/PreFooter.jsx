import React from 'react';

export default function PreFooter() {
  const p1 = 'Är du intresserad av våra tjänster och vill veta lite mer?';
  const p2 = 'Behöver du en senior och driven konsult? Hör av dig!';
  const p3 = 'Jon Neergaard';
  const p4 = 'CEO & Sales';

  return (
    <div className="pre-footer">
      <div className="pre-footer__content">
        <div>
          <h2 className="pre-footer__headline">Kontakta <span className="pre-footer__headline--highlighted">oss</span></h2>
        </div>
        <div>
          <p className="pre-footer__paragraph">
            {p1}<br />{p2}
          </p>
        </div>
        <div>
          <p className="pre-footer__paragraph pre-footer__paragraph--with-img">
            <span className="pre-footer__name">{p3}</span>
            <span className="pre-footer__title">{p4}</span>
            <i className="fa fa-envelope-o"/> <a className="pre-footer__mail" href="mailto:jon.neergaard@alphadev.se">jon.neergaard@alphadev.se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
