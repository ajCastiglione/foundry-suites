import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  componentDidMount() {
    this.toggleNav();
  }

  toggleNav = e => {
    let container = document.querySelector(".mobile-nav-container");
    let mobile = document.querySelector(".mobile-nav-inner");
    let toggleBtn = document.querySelector(".mobile-nav-btn i");
    if (e && e.target.tagName === "A") {
      console.log("hiding");
      mobile.classList.remove("mobile-show");
      container.classList.toggle("mobile-show");
      toggleBtn.classList.add("fas", "fa-bars");
      toggleBtn.classList.remove("fa", "fa-times-circle");
    }
    toggleBtn.onclick = function() {
      container.classList.toggle("mobile-show");
      mobile.classList.toggle("mobile-show");
      if (mobile.classList.contains("mobile-show")) {
        toggleBtn.classList.remove("fas", "fa-bars");
        toggleBtn.classList.add("fa", "fa-times-circle");
      } else {
        toggleBtn.classList.add("fas", "fa-bars");
        toggleBtn.classList.remove("fa", "fa-times-circle");
        mobile.classList.remove("mobile-show");
        container.classList.remove("mobile-show");
      }
    };
  };

  render() {
    let menuItems = (
      <ul className="menu">
        <li className="nav-item">
          <Link to="/rooms" onClick={this.toggleNav}>
            Rooms
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/offers" onClick={this.toggleNav}>
            Offers
          </Link>
        </li>
        <li className="nav-item">
          <a href="https://classiceventsbuffalo.com/weddings/">Weddings</a>
        </li>
        <li className="nav-item">
          <a href="https://classiceventsbuffalo.com/corporate/">Meetings</a>
        </li>
        <li className="nav-item">
          <a href="https://classiceventsbuffalo.com/events/">Events</a>
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
