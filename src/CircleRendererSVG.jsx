import React, { Component } from 'react';
import Utils from './Utils';

class ClockRendererSVG extends Component {

  render() {
    const colorString = Utils.getHexForFloats(
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
