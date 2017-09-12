import React from "react";

export default class ServicesProfession extends React.Component {
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
