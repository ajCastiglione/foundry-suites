import React, { Component } from "react";
import { Link } from "react-router-dom";

// Local files
import roomInformation from "../partials/Rooms.json";

export default class Rooms extends Component {
  state = {
    roomInfo: roomInformation
  };
  componentDidMount() {
    this.props.updateHeader();
  }
  render() {
    let rooms = this.state.roomInfo.map((el, id) => (
      <div className="room" key={id}>
        <img src={el.image} alt={el.title} className="room-image" />
        <h2 className="room-title">{el.title}</h2>
        <Link to={el.link} className="room-btn">
          More Info
        </Link>
      </div>
    ));
    return (
      <article className="rooms">
        <section className="content">
          <h1 className="page-title">Rooms</h1>
          <p className="desc">
            Quisque commodo mattis auctor. Pellentesque hendrerit rhoncus velit,
            mollis lobortis justo pellentesque eget. Cras erat ante, vulputate
            aliquet tincidunt vitae, lobortis sit amet tortor. Suspendisse sed
            feugiat urna, quis aliquet felis. Phasellus vel blandit erat. Fusce
            sed rhoncus dolor. Donec blandit bibendum tellus ac ornare.
          </p>
        </section>

        <section className="all-rooms">{rooms}</section>
      </article>
    );
  }
}
