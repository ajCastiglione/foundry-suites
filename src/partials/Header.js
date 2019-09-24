import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <div className="grid">
            <div className="logo-container">
              <img
                src="https://urgohotels.com/wp-content/uploads/2016/11/logo_placeholder.jpg"
                alt="logo"
                className="logo"
              />
            </div>
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}
