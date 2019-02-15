import React, { Component } from 'react';
import CircleRendererSVG from './CircleRendererSVG';

class CircleContainer extends Component {

  lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <CircleRendererSVG
          key={index}
          x={50}
          y={250}
          width={20}
          height={15}
          rotation={360 * progress}
          red={this.lerp(block.fromRed, block.toRed, progress)}
          green={this.lerp(block.fromGreen, block.toGreen, progress)}
          blue={this.lerp(block.fromBlue, block.toBlue, progress)}
        />
      );
    });

    return ( <g>{ blocks }</g> );
  }
}

export default CircleContainer;
