import React from "react";

export default function () {
  return (
    <div className="welcome-part">
      <h1 className="welcome-part__headline">Välkommen till <span className="main-color">Alphadev</span></h1>
      <p className="welcome-part__paragraph">Alphadev är ett konsultbolag med mycket erfarna specialister inom systemutveckling.
        Vi är inriktade på, men inte begränsade till arkitektur och agil utveckling på
        Java- och .NET-plattformen, samt frontendutveckling.</p>
      <button className="welcome-part__button button">Läs mer</button>
    </div>
  );
}
