import React from "react";

export default function () {
  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <img className="main-header__logo" src="public/assets/img/header_logo.svg"/>
        <ul className="main-header__list">
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
      </div>
    </header>
  );
}
