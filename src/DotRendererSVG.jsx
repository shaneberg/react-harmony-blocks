import React, { Component } from 'react';
import Utils from './Utils';

class DotRendererSVG extends Component {

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

    const dots = (
      <circle
        cx={this.props.x}
        cy={this.props.y}
        r={this.props.width}
        fill="blue"
      />);

    return (
      <svg>
        {dots}
      </svg>
    );
  }
}

export default DotRendererSVG;
