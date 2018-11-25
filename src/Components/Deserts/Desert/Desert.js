import React from "react";

import "./Desert.scss";

import Left from "../../Landing/Buttons/Left";
import Right from "../../Landing/Buttons/Right";
import ListModal from "../../ListModal/ListModal";

const Desert = props => {
  console.log(props);
  return (
    <div
      className="Hero Desert"
      style={props.display ? { height: "70vh" } : { height: "100vh" }}
    >
      <Left location={props.url} />
      <div className="HeroText">
        <h1>Desert</h1>
        <h2 onClick={props.click}>Find Out More</h2>
      </div>
      <Right location={props.url} />
    </div>
  );
};

export default Desert;
