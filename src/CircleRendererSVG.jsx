import React, { Component } from 'react';
import Utils from './Utils';

class ClockRendererSVG extends Component {

  render() {
    const colorString = Utils.getHexForFloats(
      this.props.red,
      this.props.green,
      this.props.blue
    );

    const bottom = this.props.y + this.props.height;
    const top = this.props.y

    const middleX = this.props.x + (this.props.width / 2);
    const middleY = top + (this.props.height / 2);

    const transform = `rotate(${this.props.rotation}, ${middleX}, ${bottom})`;

    return (
      <svg>
        <g transform={transform}>
          <circle
            cx={middleX}
            cy={middleY}
            r={this.props.width}
            fill={colorString}
            stroke="black"
          />
        </g>
      </svg>
    );
  }
}

export default ClockRendererSVG;
