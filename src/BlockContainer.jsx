import React, { Component } from 'react';
import BlockRendererSVG from './BlockRendererSVG';

class BlockContainer extends Component {

  lerp(from, to, t) {
    const lerp = t * (to - from) + from;
    return lerp;
  }

  render() {
    return (
      <BlockRendererSVG
        x={10}
        y={10 + this.props.pos * 20}
        width={100}
        height={20}
        indicatorYOffset={10}
        indicatorHeight={10}
        indicatorXOffset={100 * this.props.progress}
        red={this.lerp(this.props.fromRed, this.props.toRed, this.props.progress)}
        green={this.lerp(this.props.fromGreen, this.props.toGreen, this.props.progress)}
        blue={this.lerp(this.props.fromBlue, this.props.toBlue, this.props.progress)}
      />
    );
  }
}

export default BlockContainer;
