import React, { Component } from 'react';
import CircleRendererSVG from './CircleRendererSVG';
import Utils from './Utils';

class CircleContainer extends Component {

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <CircleRendererSVG
          key={index}
          x={50}
          y={10}
          width={10}
          height={15}
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

export default CircleContainer;
