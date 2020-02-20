import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
  renderOverhead(person) {
    return (
      <div key={person.name} className="consultants-part__consultant">
        <div className="consultants-part__consultant-wrapper">
          <div className="consultants-part__image-container">
            <div className="consultants-part__image-wrapper">
              <img src={person.image} alt={person.name}/>
            </div>
          </div>
          <p className="consultants-part__name main-color bold">{person.name}</p>
          <div className="consultants-part__info">
            <p className="consultants-part__title">{person.title}</p>
            {person.email && (
              <span className="consultants-part__email">
                <a className="consultants-part__email" href={`mailto:${person.email}`}>
                  <i className="fa fa-envelope-o"/>&nbsp;{person.email.split('@')[0]}
                </a>
              </span>
            )}
            {person.phone && (
              <span>
                <a className="consultants-part__phone" href={`tel:${person.phone}`}>
                  <i className="fa fa-phone"/>&nbsp;{person.phone}
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  renderConsultant(consultant) {
    return (
      <div key={consultant.name} className="consultants-part__consultant">
        <div className="consultants-part__consultant-wrapper">
          <div className="consultants-part__image-container">
            <div className="consultants-part__image-wrapper">
              <img src={consultant.image} alt={consultant.name}/>
            </div>
          </div>
          <p className="consultants-part__name main-color bold">{consultant.name}</p>
          <div className="consultants-part__info">
            <p className="consultants-part__title">{consultant.title}</p>
            {/*<a href={consultant.linkedin}><i className="fa fa-linkedin-square" aria-hidden="true"/></a>*/}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const CONSULTANTS = this.props.consultants || [];
    const HQ = this.props.hq || [];
    const shuffledConsultants = shuffleArray(CONSULTANTS);

    return (
      <div className="consultants-part" id="consultants">
        <h2 className="consultants-part__headline ">
          Våra <span className="main-color">Konsulter</span>
        </h2>
        <p className="consultants-part__intro-text">
          Vi är {HQ.length + CONSULTANTS.length} stycken glada Alphadevare ombord, varav {CONSULTANTS.length} konsulter
          redo att hoppa på roliga, utmanande och stimulerande uppdrag:
        </p>
        <div className="consultants-part__consultants">
          {shuffledConsultants.map((consultant) => this.renderConsultant(consultant))}
        </div>
        <h2 className="consultants-part__headline">Vi på <span className="main-color">HQ</span></h2>
        <div className="consultants-part__consultants">
          {HQ.map((consultant) => this.renderOverhead(consultant))}
        </div>
      </div>
    );
  }
}

const person = PropTypes.shape({
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
});
Consultants.propTypes = {
  consultants: PropTypes.arrayOf(person),
  hq: PropTypes.arrayOf(person)
};

function mapStateToProps(state) {
  return {
    hq: state.data.hq,
    consultants: state.data.consultants
  };
}

export default connect(mapStateToProps)(Consultants);
