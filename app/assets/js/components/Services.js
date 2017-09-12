import React from "react";

import { PROFESSIONS } from "../constants";

class ServicesProfession extends React.Component {
  componentDidMount() {
    const service = this.refs.service;

    this.waypoint = new Waypoint({
      element: service,
      handler: () => {
        service.classList.add("services-part__profession--show");
      },
      offset: (window.innerHeight - service.clientHeight)
    });
  }

  render() {
    const { headline, text, src } = this.props;

    return (
      <div className="services-part__profession" ref="service">
        <div className="services-part__profession-text">
          <h3>{headline}</h3>
          <p>{text}</p>
        </div>
        <div className="services-part__profession-image">
          <img src={src} />
        </div>
      </div>
    );
  }
}

export default function () {
  return (
    <div className="services-part" id="services">
      <div className="services-part__container">
        <div className="services-part__left">
          <ServicesProfession headline={PROFESSIONS[0].headline} text={PROFESSIONS[0].text} src={PROFESSIONS[0].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[1].headline} text={PROFESSIONS[1].text} src={PROFESSIONS[1].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[2].headline} text={PROFESSIONS[2].text} src={PROFESSIONS[2].imageSrc} />
        </div>
        <div className="services-part__middle">
          <div className="services-part__connector-wrapper">
            <div className="services-part__connector"></div>
          </div>
        </div>
        <div className="services-part__right">
          <ServicesProfession headline={PROFESSIONS[3].headline} text={PROFESSIONS[3].text} src={PROFESSIONS[3].imageSrc} />
          <ServicesProfession headline={PROFESSIONS[4].headline} text={PROFESSIONS[4].text} src={PROFESSIONS[4].imageSrc} />
        </div>
      </div>
    </div>
  );
}
