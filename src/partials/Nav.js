import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navigation flex">
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
      </nav>
    );
  }
}
