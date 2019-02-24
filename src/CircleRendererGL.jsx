import React, { Component } from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-dom';
import shader from './Circle.glsl'

class CircleRendererGL extends Component {
  componentDidMount() {
    this.setState({ shader: shader });
  }

  render() {
    let node = null;
    if (this.state && this.state.shader) {
      const shaders = Shaders.create({
        circle: {
          frag: GLSL`${this.state.shader}`
        }
      });

      node =
        <Surface width={100} height={100}>
          <Node
            shader={shaders.circle}
            uniforms={{
              u_resolution: [100, 100],
              u_time: this.props.blocks[0].progress,
            }}
          />
        </Surface>
    }

    return (
      <div>
        {node}
      </div>
    );
  }
}

export default CircleRendererGL;
