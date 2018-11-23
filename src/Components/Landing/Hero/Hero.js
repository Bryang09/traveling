import React, { Component } from "react";

import "./Hero.scss";
import Buttons from "../Buttons/Buttons";

class Hero extends Component {
  state = {
    mountain: true,
    beach: false,
    ifMountain:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ifBeach:
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  };
  onBeach = () => {
    this.setState({ beach: true, mountain: false });
  };
  render() {
    console.log(this.state);
    return (
      <div
        className={
          this.state.mountain
            ? "Hero Mountain "
            : this.state.beach
            ? "Hero Beach "
            : ""
        }
        // style={
        //   this.state.mountain
        //     ? {
        //         backgroundImage: `linear-gradient(rgba(0,0,0,0.4) , rgba(0,0,0,0.4)),url(${
        //           this.state.ifMountain
        //         }) `
        //       }
        //     : this.state.beach
        //     ? {
        //         backgroundImage: `linear-gradient(rgba(0,0,0,0.1) , rgba(0,0,0,0.1)),url(${
        //           this.state.ifBeach
        //         }) `
        //       }
        //     : null
        // }
      >
        <div className="HeroText">
          <h1>Welcome To Your Next Adventure</h1>
        </div>
        <Buttons beach={this.state.beach} onBeach={this.onBeach} />
      </div>
    );
  }
}

export default Hero;
