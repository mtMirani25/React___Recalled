import React, { Component } from "react";
import loading from "../../assets/loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading Spinner" />
      </div>
    );
  }
}

export default Spinner;
