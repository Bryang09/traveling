import React, { Component } from "react";

import BeachHero from "./Beach/Beach";
import ListModal from "../ListModal/ListModal";

class Beaches extends Component {
  state = {
    url: this.props.match.path,
    modal: false
  };

  onModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Beaches">
        <BeachHero
          url={this.state.url}
          display={this.state.modal}
          click={this.onModal}
        />
        <ListModal location={this.state.url} display={this.state.modal} />
      </div>
    );
  }
}

export default Beaches;
