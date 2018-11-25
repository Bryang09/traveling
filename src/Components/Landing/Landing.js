import React, { Component } from "react";

import "./.Landing.scss";

import Hero from "./Hero/Hero";
import Modal from "../ListModal/ListModal";
import Results from "../Results/Results";

class Landing extends Component {
  state = {
    url: this.props.match.path,
    modal: false,
    search: false
  };

  onModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  onSearch = () => {
    this.setState({ search: true });
  };
  render() {
    return (
      <div className="Landing">
        <Hero
          url={this.state.url}
          display={this.state.modal}
          click={this.onModal}
        />
        <Modal
          location={this.state.url}
          display={this.state.modal}
          search={this.state.search}
          onSearch={this.onSearch}
        />
        <Results
          url={this.state.url}
          display={this.state.modal}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default Landing;
