import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Nav from "./Components/Nav/nav";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {routes}
        <Nav />
      </div>
    </HashRouter>
  );
}

export default App;
