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
    const x1 = this.props.x ? this.props.x : 0;
    const y1 = (this.props.y ? this.props.y : 0) + this.props.height;

    // Lower right
    const x2 = x1 + this.props.width;
    const y2 = y1;

    // Top
    const x3 = x1 + (this.props.width / 2);
    const y3 = this.props.y ? this.props.y : 0;

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
