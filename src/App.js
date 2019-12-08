import React, { Component } from "react";
import "./App.css";

// Libraries
import { Route } from "react-router-dom";

// Partials
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Widget from "./partials/Widget";
import Footer from "./partials/Footer";

// Sections
import Home from "./sections/Home";
import Rooms from "./sections/Rooms";
import SingleRoom from "./sections/SingleRoom";

class App extends Component {
  state = {
    curPage: ""
  };

  componentDidMount() {
    this.updateHeader();
  }

  updateHeader = () => {
    let currentPage = window.location.pathname.replace(/\//, "")
      ? window.location.pathname.replace(/\//, "")
      : "home";
    this.setState({ curPage: currentPage });
  };

  render() {
    return (
      <main className={`foundry-suites ${this.state.curPage}`}>
        <Header curPage={this.state.curPage} />
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Hero />
              <Widget />
              <Home updateHeader={this.updateHeader} />
            </React.Fragment>
          )}
        />

        <Route
          exact
          path="/rooms"
          render={() => <Rooms updateHeader={this.updateHeader} />}
        />

        <Route path="/rooms/:room" component={SingleRoom} />

        <Footer />
      </main>
    );
  }
}

export default App;
