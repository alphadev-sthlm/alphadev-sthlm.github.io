import React from "react";

import { PROFESSIONS } from "../constants";

const ServicesProfession = ({ headline, text, src }) => (
  <div className="services-part__profession">
    <div className="services-part__profession-text">
      <h3>{headline}</h3>
      <p>{text}</p>
    </div>
    <div className="services-part__profession-image">
      <img src={src} />
    </div>
  </div>
);

export default function () {
  return (
    <div className="services-part">
      <div className="services-part__container">
        <div className="services-part__left">
          <ServicesProfession headline={PROFESSIONS[0].headline} text={PROFESSIONS[0].text} src={PROFESSIONS[0].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[1].headline} text={PROFESSIONS[1].text} src={PROFESSIONS[1].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[2].headline} text={PROFESSIONS[2].text} src={PROFESSIONS[2].imageSrc} />
        </div>
        <div className="services-part__right">
          <ServicesProfession headline={PROFESSIONS[3].headline} text={PROFESSIONS[3].text} src={PROFESSIONS[3].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[4].headline} text={PROFESSIONS[4].text} src={PROFESSIONS[4].imageSrc} />
        </div>
      </div>
    </div>
  );
}
