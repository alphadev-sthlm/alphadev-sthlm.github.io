import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({open: !this.state.open});
    console.log(this.state.open);
  }

  render() {

    return (
      <header className="main-header">
        <div className="main-header__wrapper">
          <img className="main-header__logo" src="public/assets/img/header_logo.svg"/>
          <ul className={`main-header__list ${this.state.open ? 'open' : ''}` }>
            <li className="main-header__item">
              <a className="main-header__link" href="index.html">Home</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" href="#">About Us</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" href="#">Our Services</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" href="#">Consultants</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" href="#">Blog</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" href="#">Contact</a>
            </li>
          </ul>
          <div className="main-header__nav-wrapper">

            <div className={`main-header__nav-icon ${this.state.open ? 'open' : ''}` }
                 onClick={this.handleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
