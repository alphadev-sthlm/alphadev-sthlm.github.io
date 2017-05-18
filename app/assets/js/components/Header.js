import React from "react";
import smoothscroll from "smoothscroll";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hidden: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const mainHeader = document.getElementById("main-header");

    window.addEventListener("scroll", (e) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        mainHeader.classList.add("hide");
      } else {
        mainHeader.classList.remove("hide");
      }

      lastScrollTop = st;
    });
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }

  goToAnchor(anchor, event) {
    event.preventDefault();
    this.state.hidden = !this.state.hidden;
    smoothscroll(document.getElementById(anchor));
  }

  render() {

    return (
      <header className="main-header" id="main-header">
        <div className="main-header__wrapper">
          <img className="main-header__logo" src="public/assets/img/header_logo.svg"/>
          <ul className={`main-header__list ${this.state.open ? "open" : ""}` }>
            <li className="main-header__item">
              <a className="main-header__link" onClick={this.goToAnchor.bind(this, "main")}>Home</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" onClick={this.goToAnchor.bind(this, "about")}>About Us</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" onClick={this.goToAnchor.bind(this, "services")}>Our Services</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" onClick={this.goToAnchor.bind(this, "consultants")}>Consultants</a>
            </li>
            <li className="main-header__item">
              <a className="main-header__link" onClick={this.goToAnchor.bind(this, "contact")}>Contact</a>
            </li>
          </ul>
          <div className="main-header__nav-wrapper">

            <div className={`main-header__nav-icon ${this.state.open ? "open" : ""}` }
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
