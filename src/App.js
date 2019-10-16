import React from "react";
import "./App.css";

// Local components
import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Widget from "./partials/Widget";

function App() {
  return (
    <main className="foundry-suites">
      <Header />
      <Hero />
      <div id="content">
        <Widget />
      </div>
    </main>
  );
}

export default App;
