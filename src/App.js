import React from "react";
import "./App.css";

// Local components
import Header from "./partials/Header";

function App() {
  return (
    <main className="foundry-suites">
      <Header />
      <div id="content"></div>
    </main>
  );
}

export default App;
