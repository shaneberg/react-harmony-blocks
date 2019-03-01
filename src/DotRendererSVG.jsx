import React, { Component } from 'react';
import Utils from './Utils';

class DotRendererSVG extends Component {

  render() {

    const colorString = Utils.getHexForFloats(
      this.props.red,
      this.props.green,
      this.props.blue
    );

    return (
      <svg>
        <circle
          cx={this.props.x}
          cy={this.props.y}
          r={this.props.width}
          fill={colorString}
        />
      </svg>
    );
  }
}

export default DotRendererSVG;
