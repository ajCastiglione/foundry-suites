import React from "react";
import "./App.css";

// Libraries
import { Route } from "react-router-dom";

// Local components
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Widget from "./partials/Widget";
import Home from "./sections/Home";
import Footer from "./partials/Footer";

function App() {
  return (
    <main className="foundry-suites">
      <Header />
      <Hero />
      <div id="content">
        <Widget />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
