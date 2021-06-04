import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/Tourlist";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList/>
      </React.Fragment>
    );
  }
}

export default App;
