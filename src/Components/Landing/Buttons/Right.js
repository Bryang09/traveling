import React, { Component } from "react";

import { Link } from "react-router-dom";

class Right extends Component {
  render() {
    const location = this.props.location;
    return (
      <div className="Buttons">
        <Link
          to={
            location === "/beach"
              ? "/modern"
              : location === "/"
              ? "/beach"
              : location === "/modern"
              ? "/"
              : null
          }
        >
          <img
            src="https://img.icons8.com/material-outlined/40/ffe47a/long-arrow-right.png"
            alt="arrow"
          />
        </Link>
      </div>
    );
  }
}

export default Right;
