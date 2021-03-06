import React, { Component } from "react";

import BeachHero from "./Beach/Beach";
import ListModal from "../ListModal/ListModal";
import Results from "../Results/Results";

class Beaches extends Component {
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
      <div className="Beaches">
        <BeachHero
          url={this.state.url}
          display={this.state.modal}
          click={this.onModal}
        />
        <ListModal
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

export default Beaches;
