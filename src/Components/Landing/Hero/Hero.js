import React, { Component } from "react";

import "./Hero.scss";
import Right from "../Buttons/Right";
import Left from "../Buttons/Left";

class Hero extends Component {
  state = {
    url: this.props.url
  };

  render() {
    console.log(this.props);
    return (
      <div
        className="Hero Mountain"
        style={this.props.display ? { height: "70vh" } : { height: "100vh" }}
      >
        <Left location={this.state.url} />
        <div className="HeroText">
          <h1>Welcome To Your Next Adventure</h1>
          <h2 onClick={this.props.click}>Find Out More</h2>
        </div>
        <Right location={this.state.url} />
      </div>
    );
  }
}

export default Hero;
