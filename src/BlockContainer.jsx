import React, { Component } from 'react';
import BlockRendererSVG from './BlockRendererSVG';

class BlockContainer extends Component {

  lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }

  render() {
    const blocks = this.props.blocks.map((block, index) => {
    const progress = block.progress % 1.0;
      return (
        <BlockRendererSVG
          key={index}
          x={10}
          y={10 + block.pos * 20}
          width={100}
          height={20}
          indicatorYOffset={10}
          indicatorHeight={10}
          indicatorXOffset={100 * progress}
          red={this.lerp(block.fromRed, block.toRed, progress)}
          green={this.lerp(block.fromGreen, block.toGreen, progress)}
          blue={this.lerp(block.fromBlue, block.toBlue, progress)}
        />
      );
    });

    return ( <g>{ blocks }</g> );
  }
}

export default BlockContainer;
