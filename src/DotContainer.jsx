import React, { Component } from 'react';
import DotRendererSVG from './DotRendererSVG';
import Utils from './Utils';

class DotContainer extends Component {

  render() {
    const blocks = this.props.blocks.map((block, index) => {
      const progress = block.progress % 1.0;
      let dots = [];
      // TODO: Figure out how to do this for fractional ratios
      for (let i = 0; i < block.hz; i++) {
        dots.push(
          <DotRendererSVG
            key={index + i}
            x={15 * (index + 5)}
            y={20 * i}
            width={5}
            height={5}
            red={Utils.lerp(block.fromRed, block.toRed, progress)}
            green={Utils.lerp(block.fromGreen, block.toGreen, progress)}
            blue={Utils.lerp(block.fromBlue, block.toBlue, progress)}
          />
        );
      }
      return dots;
    });

    return (<svg>{blocks}</svg>);
  }
}

export default DotContainer;
