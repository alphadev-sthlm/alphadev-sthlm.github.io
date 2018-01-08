import React from "react";
import smoothscroll from "smoothscroll";

class WorkHeader extends React.Component {
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

    window.addEventListener("scroll", () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop && st > 0) {
        mainHeader.classList.add("hide");
      } else {
        mainHeader.classList.remove("hide");
      }

      lastScrollTop = st;
    });
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  goToAnchor(anchor, event) {
    event.preventDefault();
    smoothscroll(document.getElementById(anchor));
    this.setState({ open: false });
  }

  render() {

    return (
      <header className={`main-header ${this.state.open ? "main-header--open" : ""}`} id="main-header">
        <div className="main-header__wrapper">
          <img className="main-header__logo" src="public/assets/img/header_logo.svg"/>
          <ul className={`main-header__list ${this.state.open ? "main-header__list--open" : ""}`}>
            <li className="main-header__item">
              <a href="#" className="main-header__link" onClick={this.goToAnchor.bind(this, "work")}>Hem</a>
            </li>
            <li className="main-header__item">
              <a href="#" className="main-header__link" onClick={this.goToAnchor.bind(this, "pitch")}>Om oss</a>
            </li>
            <li className="main-header__item">
              <a href="#" className="main-header__link" onClick={this.goToAnchor.bind(this, "consultants")}>Kollegor</a>
            </li>
            <li className="main-header__item">
              <a href="#" className="main-header__link" onClick={this.goToAnchor.bind(this, "contact")}>Kontakt</a>
            </li>
          </ul>
          <div className="main-header__nav-wrapper">

            <div className={`main-header__nav-icon ${this.state.open ? "open" : ""}`}
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

export default WorkHeader;