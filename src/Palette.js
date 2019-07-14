import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFromat = this.changeFromat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFromat(value) {
    this.setState({ format: value });
  }

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));

    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFromat}
        />
        <div className="palette-colors">{colorBoxes}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
