import React, { Component } from 'react';
import DotRendererSVG from './DotRendererSVG';
import Utils from './Utils';

class DotContainer extends Component {

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <DotRendererSVG
          key={index}
          x={50}
          y={50}
          width={5}
          height={5}
          rotation={360 * progress}
          red={Utils.lerp(block.fromRed, block.toRed, progress)}
          green={Utils.lerp(block.fromGreen, block.toGreen, progress)}
          blue={Utils.lerp(block.fromBlue, block.toBlue, progress)}
        />
      );
    });

    return ( <svg>{ blocks }</svg> );
  }
}

export default DotContainer;
