import React, { Component } from 'react';
import ClockRendererSVG from './ClockRendererSVG';
import Utils from './Utils';

class ClockContainer extends Component {

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <ClockRendererSVG
          key={index}
          x={50}
          y={0}
          width={10}
          height={30}
          rotation={360 * progress}
          red={Utils.lerp(block.fromRed, block.toRed, progress)}
          green={Utils.lerp(block.fromGreen, block.toGreen, progress)}
          blue={Utils.lerp(block.fromBlue, block.toBlue, progress)}
        />
      );
    });

    return ( <g>{ blocks }</g> );
  }
}

export default ClockContainer;
