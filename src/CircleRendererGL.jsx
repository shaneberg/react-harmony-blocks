import React, { Component } from 'react';
import Utils from './Utils';
import { Shaders, Node, GLSL } from "gl-react";


const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  }
});

class CircleRendererGL extends Component {

  render() {
    const colorString = Utils.getHexForFloats(
      this.props.red,
      this.props.green,
      this.props.blue
    );

    const bottom = this.props.y + this.props.height;
    const top = this.props.y

    const middleX = this.props.x + (this.props.width / 2);
    const middleY = top + (this.props.height / 2);

    const transform = `rotate(${this.props.rotation}, ${middleX}, ${bottom})`;

    const blue = 0.5;
    return (
      <Node shader={shaders.helloBlue} uniforms={{ blue }} />
    );
  }
}

export default CircleRendererGL;
