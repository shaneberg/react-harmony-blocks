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

    // Lower right
    const x2 = x1 + this.props.width;
    const y2 = y1;

    // Top
    const x3 = x1 + (this.props.width / 2);
    const y3 = this.props.y

    const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
    const transform = `rotate(${this.props.rotation}, ${x3}, ${y1})`;

    return (
      <g transform={transform}>
        <polygon
          points={points}
          fill={colorString}
          stroke="black"
        />
      </g>
    );
  }
}

export default ClockRendererSVG;
