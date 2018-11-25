import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Button.scss";

class Left extends Component {
  render() {
    const location = this.props.location;
    return (
      <div className="Buttons">
        <Link
          to={
            location === "/"
              ? "/modern"
              : location === "/beach"
              ? "/"
              : location === "/modern"
              ? "/beach"
              : null
          }
        >
          <img
            src="https://img.icons8.com/material-outlined/40/ffe47a/long-arrow-left.png"
            alt="arrow"
          />
        </Link>
      </div>
    );
  }
}

export default Left;
