import React from "react";

import { PROFESSIONS } from "../constants";
import ServicesProfession from "./ServicesProfession";

export default class Services extends React.Component {
  componentDidMount() {
    const serviceLogo = this.refs.serviceLogo;
    this.waypoint = new Waypoint({
      element: serviceLogo,
      handler: () => {
        serviceLogo.classList.add("services-part__connector--animate");
      },
      offset: (window.innerHeight / 1.5)
    });

  }
  render() {
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
            <div className="services-part__connector" ref="serviceLogo">
              <img src="public/assets/img/image-logo-white.svg" className="services-part__logo"/>
            </div>
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
}
