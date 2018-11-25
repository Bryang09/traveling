import React, { Component } from "react";

import Modern from "./Modern/Modern";
import ListModal from "../ListModal/ListModal";
import Results from "../Results/Results";

class Moderns extends Component {
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
      <div className="Moderns">
        <Modern
          url={this.state.url}
          click={this.onModal}
          display={this.state.modal}
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

export default Moderns;
