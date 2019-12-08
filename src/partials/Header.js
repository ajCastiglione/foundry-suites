import React, { Component } from "react";
import { Link } from "react-router-dom";
// Local components
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header className={`header ${this.props.curPage}`}>
        <div className="inner-header">
          <div className="grid">
            <Link className="logo-container" to="/">
              <img
                src="https://foundrysuites.s3.amazonaws.com/foundrylogo.png"
                alt="logo"
                className="logo"
              />
            </Link>
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}
