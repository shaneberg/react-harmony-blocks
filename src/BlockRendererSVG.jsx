import React, { Component } from 'react';

class BlockRendererSVG extends Component {

  // Each value are from 0.0 to 1.0
  getHexForFloats(red, green, blue) {
    let color = "#";
    let redVal = red * 255;
    let greenVal = green * 255;
    let blueVal = blue * 255;

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

    return (
      <g>
        <rect
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          strokeWidth={1}
          fill={colorString}
          stroke="black"
        />
        <line
          x1={this.props.x + this.props.indicatorXOffset}
          y1={this.props.y}
          x2={this.props.x + this.props.indicatorXOffset}
          y2={this.props.y + this.props.height}
          stroke="black"
        />
      </g>
    );
  }
}

export default BlockRendererSVG;
