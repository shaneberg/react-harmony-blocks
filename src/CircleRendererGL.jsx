import React, { Component } from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import { Surface } from 'gl-react-dom';

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
#define M_PI 3.14159265358979323846

precision mediump float;
const mat2 rotation = mat2( cos(M_PI/4.0), sin(M_PI/4.0),
                           -sin(M_PI/4.0), cos(M_PI/4.0));
void main(void)
{
    vec2 pos = mod(rotation * gl_FragCoord.xy, vec2(50.0)) - vec2(25.0);
    float dist_squared = dot(pos, pos);

     gl_FragColor = mix(vec4(.90, .90, .90, 1.0), vec4(.20, .20, .40, 1.0),
                        smoothstep(380.25, 420.25, dist_squared));
 }
`

  }
});

class CircleRendererGL extends Component {

  render() {
    return (
      <Surface width={200} height={100}>
        <Node shader={shaders.helloBlue} />
      </Surface>
    );
  }
}

export default CircleRendererGL;
