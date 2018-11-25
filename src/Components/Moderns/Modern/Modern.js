import React from "react";

import "./Modern.scss";

import Left from "../../Landing/Buttons/Left";
import Right from "../../Landing/Buttons/Right";

const Modern = props => {
  return (
    <div
      className="Hero Modern"
      style={props.display ? { height: "70vh" } : { height: "100vh" }}
    >
      <Left location={props.url} />
      <div className="HeroText">
        <h1>Modern</h1>
        <h2 onClick={props.click}>Find Out More</h2>
      </div>
      <Right location={props.url} />
    </div>
  );
};

export default Modern;
