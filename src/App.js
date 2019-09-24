import React from "react";
import "./App.css";

// Local components
import Header from "./partials/Header";
import Hero from "./partials/Hero";

function App() {
  return (
    <main className="foundry-suites">
      <Header />
      <Hero />
      <div id="content"></div>
    </main>
  );
}

export default App;
