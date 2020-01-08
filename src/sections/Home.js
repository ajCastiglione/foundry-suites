import React, { Component } from "react";
import { Link } from "react-router-dom";
// Local components
import RecentPosts from "../partials/RecentPosts";
import roomInformation from "../partials/Rooms.json";

export default class Home extends Component {
  state = {
    rooms: roomInformation
  };
  componentDidMount() {
    this.props.updateHeader();
  }
  render() {
    let { rooms } = this.state;
    let suites = rooms.map((el, id) => (
      <div className="suite" key={id}>
        <Link to={el.link} className="link">
          <img src={el.image} alt={el.title} />
          <h2 className="suite-title">{el.title}</h2>
        </Link>
      </div>
    ));

    return (
      <article className="home">
        <section className="under-widget wrap">
          <h1 className="page-title">Foundry Suites</h1>
          <p className="widget-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            commodo ligula at eleifend vulputate. Aliquam dignissim quam eu
            gravida vulputate. Suspendisse sagittis vitae tortor sit amet
            pellentesque. Maecenas porta elementum dolor sed rutrum. Duis et
            eros ut erat fermentum sagittis. Nulla nulla dolor, commodo quis
            mollis id, bibendum nec risus. Aliquam tempus dolor sed lectus
            malesuada bibendum. Maecenas non ullamcorper dolor. Vestibulum vitae
            quam quis neque laoreet suscipit et vel ipsum. Nunc feugiat viverra
            ullamcorper.
          </p>
        </section>
        <section className="rooms">
          <h2 className="sub-title">Rooms</h2>
          <div className="text-center">
            <Link to="/rooms" className="btn">
              - view all -
            </Link>
            <div className="suites grid-two">{suites}</div>
          </div>
        </section>
        <section className="contact-info">
          <div className="content">
            <h2>Hotel Policy:</h2>
            <ol>
              <li>
                A reservation is not completed or guaranteed until a
                confirmation email or letter has been sent by the hotel.
              </li>
              <li>
                Every precaution is taken when a reservation is made, both
                online and offline, to safeguard our guests.
              </li>
            </ol>
            <h2>Hotel Contact Information:</h2>
            <p>Address: 1738 Elmwood Ave. Buffalo, NY 14207</p>
            <p>
              Phone: <a href="tel:716-240-9693">(716) 240-9693</a>
            </p>
            <p>Fax: (716) 259-9465</p>
          </div>
        </section>
        <RecentPosts />
      </article>
    );
  }
}
