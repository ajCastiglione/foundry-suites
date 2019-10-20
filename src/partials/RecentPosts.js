import React, { Component } from "react";

export default class RecentPosts extends Component {
  state = {
    posts: [],
    loaded: false
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    let api =
      "https://classiceventsbuffalo.com/wp-json/wp/v2/posts?_embed&per_page=2";
    fetch(api)
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res, loaded: true });
      });
  };

  displayPosts = () => {
    let { posts } = this.state;
    let blog = posts.map((el, id) => (
      <div className="post" key={id}>
        <a
          href={el.link}
          className="link"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={el._embedded["wp:featuredmedia"][0].source_url}
            alt={el._embedded["wp:featuredmedia"][0].title.rendered}
          />
          <h3 className="post-title">{el.title.rendered}</h3>
        </a>
      </div>
    ));
    return blog;
  };

  render() {
    return (
      <section className="recent-posts">
        <h2 className="sub-title">Recent Articles</h2>
        <div className="posts grid-two">
          {this.state.loaded ? this.displayPosts() : null}
        </div>
      </section>
    );
  }
}
