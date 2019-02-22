import React, { Component } from 'react';
import CircleRendererGL from './CircleRendererGL';

class CircleGLContainer extends Component {

  render() {
    return (
      <CircleRendererGL
        x={50}
        y={10}
        width={10}
        height={15}
        blocks={this.props.blocks}
      />
    );
  }
}

export default CircleGLContainer;
