import React from "react";

export default class CoolGang extends React.Component {
  render() {
    const subtitle = "Kom och jobba på";
    const butWhy = "Vi är förvisso experter inom våra områden men också så mycket mer. " +
      "Vi satsar på att göra kul saker tillsammans och ha en bra gemenskap. " +
      "Många av oss tycker om att åka skidor. Många av oss tycker om att sjunga karaoke. Några av oss tycker om att skjuta djur i skogen." +
      "Vissa av oss tycker om att spela StarCraft. Vissa av oss tycker om att ha filosofiska diskussioner. " +
      "Många av oss tycker om att dricka vin. Vissa tycker även om att smaka på vin.";
    const oneOfUs = "Känner du en avsaknad av gemenskap i ditt nuvarande arbete? " +
      "Är du konsult och känner du att din konsultchef ibland behandlar dig som boskap? " +
      "Känner du att du är den ensamma lågan som brinner i ett ensligt fjäll av fuktig mossa?" +
      "Du kanske vill börja jobba med oss istället?";

    return (
      <div className="welcome-part" id="pitch">
        <h1 className="welcome-part__headline">{subtitle} <span className="main-color">Alphadev</span></h1>
        <p className="welcome-part__paragraph">{butWhy}</p>
        <p className="welcome-part__paragraph">{oneOfUs}</p>
      </div>
    );
  }
}
