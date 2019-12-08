import React, { Component } from "react";

import rooms from "../partials/Rooms.json";

export default class SingleRoom extends Component {
  state = {
    room: {}
  };
  componentDidMount() {
    let page = window.location.pathname;
    let room = rooms.filter(item => item.link === page);
    this.setState({ room: room[0] });
  }

  render() {
    let room = this.state.room;
    let amens = (
      <React.Fragment>
        <div className="amenity-single">
          <i className="fas fa-user-friends"></i>
          <h3 className="amenity-title">Max guests</h3>
          <p className="amenity">{room.guestLimit}</p>
        </div>
        <div className="amenity-single">
          <i className="fas fa-bed"></i>
          <h3 className="amenity-title">Bed type(s)</h3>
          <p className="amenity">{room.bedType}</p>
        </div>
        <div className="amenity-single">
          <i className="fas fa-home"></i>
          <h3 className="amenity-title">Room size</h3>
          <p className="amenity">{room.roomSize}</p>
        </div>
      </React.Fragment>
    );
    return (
      <article className="single-room">
        <h1 className="page-title">{room.title}</h1>
        <div className="single-content wrap">
          <img className="single-image" src={room.image} alt={room.title} />
          <h2 className="single-title">room details</h2>
          <p className="single-details">{room.details}</p>
          <h2 className="amenities-title">Amenities</h2>
          <div className="amenities-content">{amens}</div>
        </div>
      </article>
    );
  }
}
