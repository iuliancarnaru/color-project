import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className="color-box"
      >
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ColorBox;
