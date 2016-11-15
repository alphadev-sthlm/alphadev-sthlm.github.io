import React from "react";
import { CONSULTANTS } from "../constants";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Consultants() {

  const shuffledConsultants = shuffleArray(CONSULTANTS);

  return (
    <div className="consultants-part">
      {shuffledConsultants.map((consultant, index) => {
        return (
            <div key={index} className="consultants-part__consultant">
              <div className="consultants-part__consultant-wrapper">
                <div className="consultants-part__image-wrapper">
                  <img src={consultant.image} />
                </div>
                <p className="consultants-part__name main-color">{consultant.name}</p>
                <p className="consultants-part__title bold">{consultant.title}</p>
                <a href={consultant.linkedin}> <img width="30" height="30" src={"public/assets/img/linkedin.svg"} /> </a>
              </div>
            </div>
        );
      })}
    </div>
  );
}


export default Consultants;
