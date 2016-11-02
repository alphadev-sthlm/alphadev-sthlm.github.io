import React, { PropTypes } from "react";


const Flipping = function ({ front, back }) {
  let interval;

  return (
    <div className="flipping__container">
      <div className="flipping__flipper" ref={(flipper) => {
        if (!interval) {
          interval = setInterval(() => {
            flipper.classList.toggle("spin");
          }, 10000);
        }
      }}>
        <div className="flipping__front">
          {front}
        </div>
        <div className="flipping__back">
          {back}
        </div>
      </div>
    </div>
  );
};

Flipping.propTypes = {
  front: PropTypes.element.isRequired,
  back: PropTypes.element.isRequired
};

export default Flipping;
