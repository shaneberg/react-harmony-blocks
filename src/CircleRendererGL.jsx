import React, { Component } from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-dom';

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision mediump float;
varying vec2 uv;
uniform vec2 u_resolution;

float circle(in vec2 _st, in float _radius){
  vec2 dist = _st-vec2(0.5);
  return 1.-smoothstep(_radius-(_radius*0.01),
                       _radius+(_radius*0.01),
                       dot(dist,dist)*4.0);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

	vec3 color = vec3(circle(st,0.3));

	gl_FragColor = vec4( color, 1.0 );
}
`

  }
});

class CircleRendererGL extends Component {

  render() {
    return (
      <Surface width={200} height={100}>
        <Node shader={shaders.helloBlue} uniforms={{ u_resolution: [200, 200] }}/>
      </Surface>
    );
  }
}

export default CircleRendererGL;
