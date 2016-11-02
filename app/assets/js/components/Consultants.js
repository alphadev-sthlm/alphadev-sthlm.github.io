import React from "react";
import { CONSULTANTS } from "../constants";

function Consultants() {

  return (

    <div className="consultants-part">
      {CONSULTANTS.map((consultant, index) => {
        return (
            <div key={index} className="consultants-part__consultant">
              <div className="consultants-part__consultant-wrapper">
                <div className="consultants-part__image-wrapper">
                  <img src={consultant.image} />
                </div>
                <p className="consultants-part__name main-color">{consultant.name}</p>
                <p>Jobtitle...</p>
                <p>Skilllzzzzz...</p>
                <p>Skilllzzzzz...</p>
                <a href={consultant.linkedin} />
              </div>
            </div>
          );
      })}
    </div>
  );
}


export default Consultants;
