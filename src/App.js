import React, { Component } from "react";
import "./App.css";
import HolidaysContainer from "./components/HolidaysContainer.js";
import SiteFooter from "./components/SiteFooter.js";
import EmailContainer from "./components/EmailContainer.js";

class App extends Component {
  render() {
    let style = { width: "90%" };
    return (
      <div style={style}>
        <HolidaysContainer />
        <EmailContainer />
        <SiteFooter />
      </div>
    );
  }
}

export default App;
