import React, { Component } from "react";

export default class Nav extends Component {
  state = {
    showMobNav: false
  };

  componentDidMount() {
    this.toggleNav();
  }

  toggleNav = e => {
    let mobile = document.querySelector(".mobile-nav-inner");
    let toggleBtn = document.querySelector(".mobile-nav-btn i");

    // mobile.height($(window).height());

    toggleBtn.onclick = function() {
      mobile.classList.toggle("mobile-show");
      if (mobile.classList.contains("mobile-show")) {
        toggleBtn.classList.remove("fas", "fa-bars");
        toggleBtn.classList.add("fa", "fa-times-circle");
      } else {
        toggleBtn.classList.add("fas", "fa-bars");
        toggleBtn.classList.remove("fa", "fa-times-circle");
      }
    };
  };

  render() {
    let menuItems = (
      <ul className="menu">
        <li className="nav-item">
          <a href="test">Rooms</a>
        </li>
        <li className="nav-item">
          <a href="test">Offers</a>
        </li>
        <li className="nav-item">
          <a href="test">Weddings</a>
        </li>
        <li className="nav-item">
          <a href="test">Meetings</a>
        </li>
        <li className="nav-item">
          <a href="test">Events</a>
        </li>
      </ul>
    );
    return (
      <React.Fragment>
        <nav className="navigation flex">{menuItems}</nav>
        <div className="mobile-nav-toggle-container">
          <div className="mobile-nav-btn">
            <i className="fas fa-bars" onClick={this.toggleNav}></i>
          </div>
          <div className="mobile-nav-websiteName">
            <h3>Foundry Suites</h3>
          </div>
        </div>
        <div className="mobile-nav-container">
          <nav className="mobile-nav-inner">{menuItems}</nav>
        </div>
      </React.Fragment>
    );
  }
}
