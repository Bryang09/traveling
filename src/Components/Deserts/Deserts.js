import React, { Component } from "react";

import Desert from "./Desert/Desert";
import ListModal from "../ListModal/ListModal";

class Deserts extends Component {
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
      <div className="Deserts">
        <Desert
          url={this.state.url}
          click={this.onModal}
          display={this.state.modal}
        />
        <ListModal location={this.state.url} display={this.state.modal} />
      </div>
    );
  }
}

export default Deserts;
