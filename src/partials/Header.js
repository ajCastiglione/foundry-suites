import React, { Component } from "react";
// Local components
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="inner-header">
          <div className="grid">
            <div className="logo-container">
              <img
                src="https://foundrysuites.s3.amazonaws.com/foundrylogo.png"
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
