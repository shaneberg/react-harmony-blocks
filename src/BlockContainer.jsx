import React, { Component } from 'react';
import BlockRendererSVG from './BlockRendererSVG';
import Utils from './Utils';

class BlockContainer extends Component {

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
          red={Utils.lerp(block.fromRed, block.toRed, progress)}
          green={Utils.lerp(block.fromGreen, block.toGreen, progress)}
          blue={Utils.lerp(block.fromBlue, block.toBlue, progress)}
        />
      );
    });

    return (<div>{blocks}</div>);
  }
}

export default BlockContainer;
