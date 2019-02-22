import React, { Component } from 'react';
import Utils from './Utils';

class BlockRendererSVG extends Component {

  render() {
    const colorString = Utils.getHexForFloats(
      this.props.red,
      this.props.green,
      this.props.blue
    );

    return (
      <svg>
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
      </svg>
    );
  }
}

export default BlockRendererSVG;
