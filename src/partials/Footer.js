import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <article className="footer">
        <section className="top">
          <h2 className="sub-title">Reservations</h2>
          <div className="text-center">
            <a
              href="https://us01.iqwebbook.com/FSBBUF735"
              className="btn"
              target="_blank"
              rel="noopener noreferrer">
              book now
            </a>
          </div>
        </section>
        <section className="bottom">
          <h3>
            <span>The Foundry Suites</span>
          </h3>
          <address>
            1738 Elmwood Ave <br /> Buffalo <br /> NY 14207
          </address>
          <a href="mailto:thefoundry@classiceventsbuffalo.com" className="link">
            thefoundry@classiceventsbuffalo.com
          </a>
        </section>
      </article>
    );
  }
}
