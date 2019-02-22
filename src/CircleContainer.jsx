import React, { Component } from 'react';
import CircleRendererGL from './CircleRendererGL';
import Utils from './Utils';
import { Surface } from 'gl-react-dom'; // for React DOM

class CircleContainer extends Component {

  render() {
    const blocks = this.props.blocks.map((block, index) => {
      const progress = block.progress % 1.0;
      return (
        <Surface
          width={300}
          height={300}
          key={index}
        >
          <CircleRendererGL
            x={50}
            y={10}
            width={10}
            height={15}
            rotation={360 * progress}
            red={Utils.lerp(block.fromRed, block.toRed, progress)}
            green={Utils.lerp(block.fromGreen, block.toGreen, progress)}
            blue={Utils.lerp(block.fromBlue, block.toBlue, progress)}
          />
        </Surface>
      );
    });

    return (<div>{blocks}</div>);
  }
}

export default CircleContainer;
