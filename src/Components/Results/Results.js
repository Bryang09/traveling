import React, { Component } from "react";

import "./Results.scss";

import Result from "./Result/Result";

class Results extends Component {
  state = {
    results: [
      {
        id: 0,
        src:
          "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9bac8510ae296aa30e284bfaec2f2d7&auto=format&fit=crop&w=1050&q=80",
        city: "Bolzano",
        country: "Italy",
        price: 600
      },
      {
        id: 1,
        src:
          "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d15da0da74c68d59d0b9c68e501941c7&auto=format&fit=crop&w=634&q=80",
        city: "Munkebu",
        country: "Norway",
        price: 480
      },
      {
        id: 3,
        src:
          "https://images.unsplash.com/photo-1493708638467-241317300c83?ixlib=rb-0.3.5&s=23024847b0bbfc9d07eb671ba6ac6fd7&auto=format&fit=crop&w=1050&q=80",
        city: "Canazei",
        country: "Italy",
        price: 590
      }
    ],

    beaches: [
      {
        id: 0,
        src:
          "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89b771e24723020d223b282ad0d44b03&auto=format&fit=crop&w=1034&q=80",
        city: "Nusa Dua Beach",
        country: "Indonesia",
        price: 450
      },
      {
        id: 1,
        src:
          "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=829ab8c0acb239927481da8cd0c48bd6&auto=format&fit=crop&w=1050&q=80",
        city: "Saboga",
        country: "Panama",
        price: 470
      },
      {
        id: 2,
        src:
          "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?ixlib=rb-0.3.5&s=04b3365b6b901907b28e7ed5dc9854ac&auto=format&fit=crop&w=1189&q=80",
        city: "Gangehi",
        country: "Maldives",
        price: 450
      }
    ],
    modern: [
      {
        id: 0,
        src:
          "https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        city: "Dharmapuri",
        country: "India",
        price: 700
      },
      {
        id: 1,
        src:
          "https://images.pexels.com/photos/50632/pexels-photo-50632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        city: "London",
        country: "UK",
        price: 750
      },
      {
        id: 2,
        src:
          "https://images.pexels.com/photos/208702/pexels-photo-208702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        city: "Washington",
        country: "DC",
        price: 600
      }
    ]
  };
  render() {
    console.log(this.props);
    const location = this.props.url;
    const display = this.props.display;
    return (
      <div
        className="Results"
        style={
          this.props.search
            ? { display: "flex", flexDirection: "column" }
            : { display: "none" }
        }
      >
        {this.props.url === "/" ? (
          <Result
            list={this.state.results}
            location={location}
            display={display}
          />
        ) : this.props.url === "/beach" ? (
          <Result
            list={this.state.beaches}
            location={location}
            display={display}
          />
        ) : this.props.url === "/modern" ? (
          <Result
            list={this.state.modern}
            location={location}
            display={display}
          />
        ) : (
          console.log("Nothing Happened")
        )}
      </div>
    );
  }
}

export default Results;
