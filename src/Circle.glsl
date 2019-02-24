#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI_TWO 1.570796326794897
#define PI 3.141592653589793
#define TWO_PI 6.283185307179586

float circle(in vec2 st, in float radius){
  vec2 center = vec2(.5, .5);
  float dist = distance(st, center); 
  return 1. - step(radius, dist);
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(circle(st,.1));
  gl_FragColor = vec4(color,0.9);
}