import React from "react";

import "./Result.scss";

const Result = props => {
  console.log(props);
  const home = "#27ae60";
  const home_ = "27ae60";
  const beach = "#2884c6";
  const beach_ = "2884c6";
  const modern = "#f83d3d";
  const modern_ = "f83d3d";

  const List = props.list.map(res => {
    return (
      <div
        className="Result"
        key={res.id}
        style={props.display ? { display: "flex" } : { display: "none" }}
      >
        <div
          className="resultImg"
          style={{
            backgroundImage: `url(${res.src})`
          }}
        />
        <div className="resultText">
          <h3>
            {res.city}, {res.country}
          </h3>
          <h4>
            ${res.price} / person{" "}
            <img
              alt="icon"
              src={`https://img.icons8.com/metro/40/${
                props.location === "/"
                  ? home_
                  : props.location === "/beach"
                  ? beach_
                  : props.location === "/modern"
                  ? modern_
                  : "fffffff"
              }/contacts.png`}
            />
          </h4>
          <h5
            style={
              props.location === "/"
                ? { border: `1px solid ${home}`, background: home }
                : props.location === "/beach"
                ? { border: `1px solid ${beach}`, background: beach }
                : props.location === "/modern"
                ? { border: `1px solid ${modern}`, background: modern }
                : null
            }
          >
            Book Now!
          </h5>
        </div>
      </div>
    );
  });
  return List;
};

export default Result;
