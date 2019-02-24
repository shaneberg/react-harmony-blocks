#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI_TWO 1.570796326794897
#define PI 3.141592653589793
#define TWO_PI 6.283185307179586

vec3 circle(in vec2 st, in float radius){
  vec3 color = vec3(.2, .2, .9);
  vec2 center = vec2(.5, .5);
  float dist = distance(st, center);
  return color - step(radius, dist);
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = circle(st,.1);
  gl_FragColor = vec4(color,1.0);
}