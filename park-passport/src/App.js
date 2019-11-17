import React from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Paws in the Park</h1>
      {/* <img
        src=""
        alt="paw pic"
      /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      {/* <Route exact path="/Register" component={Register} /> */}
      <Route exact path="/Register" render={props => <Register {...props} />} />
    </div>
  );
}

export default App;
