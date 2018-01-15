import React from 'react';

export default function () {
  const p1 = 'Vi är ett konsultbolag med erfarna specialister inom systemutveckling, inriktade på arkitektur och agil utveckling på moderna plattformar inom hela stacken.';
  const p2 = 'Vi jobbar främst på plats hos våra kunder i Stockholmsområdet – stora internationella bolag, såväl som små startup-bolag i alla tänkbara branscher. Bolag som vill digitalisera eller vidareutveckla sina befintliga processer och bolag som skapar helt nya affärer på en digital plattform - låt oss hjälpa dig på din resa!';
  return (
    <div className="welcome-part" id="about">
      <h1 className="welcome-part__headline">Välkommen till <span className="main-color">Alphadev</span></h1>
      <p className="welcome-part__paragraph">{p1}</p>
      <p className="welcome-part__paragraph">{p2}</p>
    </div>
  );
}
