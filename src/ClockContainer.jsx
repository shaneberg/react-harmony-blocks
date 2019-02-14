import React, { Component } from 'react';
import ClockRendererSVG from './ClockRendererSVG';

class ClockContainer extends Component {

  lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <ClockRendererSVG
          key={index}
          x={50}
          y={100}
          width={10}
          height={50}
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

export default ClockContainer;
