import React, { Component } from "react";

import Hero from "./Hero/Hero";
import Modal from "../ListModal/ListModal";

class Landing extends Component {
  state = {
    url: this.props.match.path,
    modal: false
  };

  onModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div className="Landing">
        <Hero
          url={this.state.url}
          display={this.state.modal}
          click={this.onModal}
        />
        <Modal location={this.state.url} display={this.state.modal} />
      </div>
    );
  }
}

export default Landing;
