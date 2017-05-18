import React from "react";

export default () => {
  const subtitle = "Architecture - Development - Agile methodology";

  return (
    <div className="intro-part">
      <div className="intro-part__image">
        <img src="public/assets/img/image-logo.svg" className="intro-part__banner" />
        <span className="intro-part__subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
