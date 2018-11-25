import React from "react";

import "./Beach.scss";

import Left from "../../Landing/Buttons/Left";
import Right from "../../Landing/Buttons/Right";

const BeachHero = props => {
  console.log(props);
  return (
    <div
      className="Hero Beach"
      style={props.display ? { height: "70vh" } : { height: "100vh" }}
    >
      <Left location={props.url} />
      <div className="HeroText">
        <h1>Magnificent Beaches</h1>
        <h2 onClick={props.click}>Find Out More</h2>
      </div>
      <Right location={props.url} />
    </div>
  );
};

export default BeachHero;
