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
      limit: 4
    };
    this.toggleLimit = this.toggleLimit.bind(this);
    this.shuffledConsultants = shuffleArray(CONSULTANTS);
  }

  toggleLimit() {
    const limit = this.state.limit;
    this.setState({
      limit: limit === 4 ? 100 : 4
    });
  }

  render() {
    return (
      <div className="consultants-part" id="consultants">
        <h1 className="consultants-part__headline">Våra <span className="main-color">Konsulter</span></h1>
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
                    <div className="consultants-part__image-wrapper">
                      <img src={consultant.image}/>
                    </div>
                    <p className="consultants-part__name main-color">{consultant.name}</p>
                    <p className="consultants-part__title bold">{consultant.title}</p>
                    <a href={consultant.linkedin}> <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"> </i> </a>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="consultants-part__toggle-button">
          <p>
            <button className="button" onClick={this.toggleLimit}>{this.state.limit === 4 ? 'Visa mer' : 'Dölj'}</button>
          </p>
        </div>
      </div>
    );
  }
}


export default Consultants;
