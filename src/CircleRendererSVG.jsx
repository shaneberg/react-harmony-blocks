import React, { Component } from 'react';

class ClockRendererSVG extends Component {

  // Each value are from 0.0 to 1.0
  getHexForFloats(red, green, blue) {
    let color = "#";
    let redVal = Math.round(red * 255);
    let greenVal = Math.round(green * 255);
    let blueVal = Math.round(blue * 255);

    color += redVal.toString(16).padStart(2, 0);
    color += greenVal.toString(16).padStart(2, 0);
    color += blueVal.toString(16).padStart(2, 0);
    return color;
  }

  render() {

    const colorString = this.getHexForFloats(
      this.props.red,
      this.props.green,
      this.props.blue
    );

    // Lower left
    const x1 = this.props.x;
    const y1 = this.props.y + this.props.height;

    // Middle
    const x3 = x1 + (this.props.width / 2);
    const y3 = this.props.y

    const transform = `rotate(${this.props.rotation}, ${x3}, ${y1})`;

    return (
      <g transform={transform}>
        <circle
          cx={x3}
          cy={y3}
          r={this.props.width}
          fill={colorString}
          stroke="black"
        />
      </g>
    );
  }
}

export default ClockRendererSVG;
