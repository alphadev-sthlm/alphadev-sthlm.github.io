import React from "react";

export default () => {
  const subtitle = 'Architecture - Development - Agile methodology';

  return (
    <div className="intro-part">
      <img src="public/assets/img/logos/banner_logo.png" className="intro-part__banner" />
      <span className="intro-part__subtitle">{subtitle}</span>
    </div>
  );
}
