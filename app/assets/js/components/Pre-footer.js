import React from "react";

export default function () {
  const p1 = "Är du intresserad av våra tjänster och vill veta lite mer?";
  const p2 = "Eller är du en vass utvecklare som funderar på ny hemvist?";
  const p3 = "Jon Neergaard";
  const p4 = "CEO & Sales";

  return (
    <a className="pre-footer" title="Kontakta Jon" href="mailto:jon.neergaard@alphadev.se">
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
            <img className="pre-footer__img" src="public/assets/img/consultants/jon_sml.jpg" />
            <span className="pre-footer__name">{p3}</span>
            <span className="pre-footer__title">{p4}</span>
            {/* <a className="pre-footer__mail" href="mailto:jon.neergaard@alphadev.se">jon.neergaard@alphadev.se</a> */}
          </p>
        </div>
      </div>
    </a>
  );
}
