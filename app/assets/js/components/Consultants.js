import React from "react";
import {CONSULTANTS} from "../constants";

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

class Consultants extends React.Component {

  constructor() {
    super();
    this.state = {
      showAllConsultants: true, //false
      limit: 100//4
    };
    this.toggleLimit = this.toggleLimit.bind(this);
    this.shuffledConsultants = shuffleArray(CONSULTANTS);
  }

  toggleLimit() {
    this.setState({
      showAllConsultants: true,
      limit: 100
    });
  }

  render() {
    const text = `Vi är ${ CONSULTANTS.length } stycken glada Alphadevare ombord, redo att hoppa på roliga, utmanande och stimulerande uppdrag.`;
    return (
      <div className="consultants-part" id="consultants">
        <h2 className="consultants-part__headline">Våra <span className="main-color">Konsulter</span></h2>
        <p>{text}</p>
        <div className="consultants-part__consultants">
          {this.shuffledConsultants
            .slice(0, this.state.limit)
            .map((consultant, index) => {
              if (!consultant.image) {
                const dimension = 200 + index;
                consultant.image = `http://fillmurray.com/g/${dimension}/${dimension}`;
              }
              return consultant;
            })
            .map((consultant, index) => {
              return (
                <div key={index} className="consultants-part__consultant">
                  <div className="consultants-part__consultant-wrapper">
                    <div className="consultants-part__image-container">
                      <div className="consultants-part__image-wrapper">
                        <img src={consultant.image}/>
                      </div>
                    </div>
                    <p className="consultants-part__name main-color bold">{consultant.name}</p>
                    <div className="consultants-part__info">
                      {/*<p className="consultants-part__title">{consultant.title}</p>*/}
                      <a href={consultant.linkedin}><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="consultants-part__toggle-button">
          <p>
            { !this.state.showAllConsultants &&
              <button className="button" onClick={this.toggleLimit}>Visa alla</button>
            }
          </p>
        </div>
      </div>
    );
  }
}


export default Consultants;
