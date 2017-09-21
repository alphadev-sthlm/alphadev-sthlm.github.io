import React from "react";
import {connect} from "react-redux";

import ServicesProfession from "./ServicesProfession";

class Services extends React.Component {
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
    const PROFESSIONS = this.props.professions;
    return (
      <div className="services-part" id="services">
        <div className="services-part__container">
          {PROFESSIONS.length &&
          <div className="services-part__left">
            <ServicesProfession headline={PROFESSIONS[0].headline} text={PROFESSIONS[0].text} src={PROFESSIONS[0].imageSrc}/>
            <ServicesProfession headline={PROFESSIONS[1].headline} text={PROFESSIONS[1].text} src={PROFESSIONS[1].imageSrc}/>
            <ServicesProfession headline={PROFESSIONS[2].headline} text={PROFESSIONS[2].text} src={PROFESSIONS[2].imageSrc}/>
          </div>
          }
          <div className="services-part__middle">
            <div className="services-part__connector-wrapper">
              <div className="services-part__connector" ref="serviceLogo">
                <span className="services-part__connector-line services-part__connector-line--frontend"></span>
                <span className="services-part__connector-line services-part__connector-line--backend"></span>
                <span className="services-part__connector-line services-part__connector-line--agile"></span>
                <span className="services-part__connector-line services-part__connector-line--education"></span>
                <span className="services-part__connector-line services-part__connector-line--architecture"></span>
                <img src="public/assets/img/image-logo-white.svg" className="services-part__logo"/>
              </div>
            </div>
          </div>
          {PROFESSIONS.length &&
          <div className="services-part__right">
            <ServicesProfession headline={PROFESSIONS[3].headline} text={PROFESSIONS[3].text} src={PROFESSIONS[3].imageSrc}/>
            <ServicesProfession headline={PROFESSIONS[4].headline} text={PROFESSIONS[4].text} src={PROFESSIONS[4].imageSrc}/>
          </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    professions: state.data.professions
  };
}

export default connect(mapStateToProps)(Services);
