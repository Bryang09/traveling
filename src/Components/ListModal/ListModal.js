import React from "react";

import "./ListModal.scss";

const ListModal = props => {
  const location = props.location;
  const home = "#27ae60";
  const home_ = "27ae60";
  const beach = "#2884c6";
  const beach_ = "2884c6";
  const modern = "#f83d3d";
  const modern_ = "f83d3d";
  console.log(props);
  return (
    <div
      className="ListModal"
      style={props.display ? { display: "flex" } : { display: "none" }}
    >
      {/* <form>
        <label>
          <h5>Destination</h5> <br />
          <input
            type="text"
            id="destination"
            style={
              props.location === "/"
                ? { borderBottom: `1px solid ${home}` }
                : props.location === "/beach"
                ? { borderBottom: `1px solid ${beach}` }
                : props.location === "/modern"
                ? { borderBottom: `1px solid ${Modern}` }
                : null
            }
          />
        </label>
      </form> */}
      <form>
        <label>
          <h5>From</h5> <br />
          <h6>
            11/30/2018{" "}
            <img
              alt="icon"
              src={`https://img.icons8.com/ios/40/${
                props.location === "/"
                  ? home_
                  : props.location === "/beach"
                  ? beach_
                  : props.location === "/modern"
                  ? modern_
                  : "fffffff"
              }/calendar-filled.png`}
            />
          </h6>
        </label>
      </form>
      <form>
        <label>
          <h5>To</h5> <br />
          <h6>
            12/14/2018{" "}
            <img
              alt="icon"
              src={`https://img.icons8.com/ios/40/${
                props.location === "/"
                  ? home_
                  : props.location === "/beach"
                  ? beach_
                  : props.location === "/modern"
                  ? modern_
                  : "fffffff"
              }/calendar-filled.png`}
            />
          </h6>
        </label>
      </form>
      <form>
        <label>
          <h5>People</h5> <br />
          <h6>
            2 People
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
          </h6>
        </label>
      </form>
      <div className="search">
        <h4
          style={
            location === "/"
              ? { background: home }
              : location === "/beach"
              ? { background: beach }
              : location === "/modern"
              ? { background: modern }
              : null
          }
          onClick={props.onSearch}
        >
          <img
            alt="icon"
            src={`https://img.icons8.com/ios/40/ffffff/search-filled.png`}
          />
          Search
        </h4>
      </div>
    </div>
  );
};

export default ListModal;
