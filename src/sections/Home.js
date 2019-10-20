import React, { Component } from "react";

// Local components
import RecentPosts from "../partials/RecentPosts";

export default class Home extends Component {
  state = {
    rooms: [
      {
        image: "http://placehold.jp/430x230.png",
        title: "King Suite",
        link: "/rooms/king"
      },
      {
        image: "http://placehold.jp/430x230.png",
        title: "Queen Suite",
        link: "/rooms/queen"
      }
    ]
  };
  render() {
    let { rooms } = this.state;
    let suites = rooms.map((el, id) => (
      <div className="suite" key={id}>
        <a href={el.link} className="link">
          <img src={el.image} alt={el.title} />
          <h2 className="suite-title">{el.title}</h2>
        </a>
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
            <a href="/rooms" className="btn">
              - view all -
            </a>
            <div className="suites grid-two">{suites}</div>
          </div>
        </section>
        <section className="video">
          <div className="video-container">
            <img src="http://placehold.jp/960x570.png" alt="placeholder" />
          </div>
        </section>
        <RecentPosts />
      </article>
    );
  }
}
