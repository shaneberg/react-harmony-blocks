#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec2 u_frequencies;

#define PI_TWO 1.570796326794897
#define PI 3.141592653589793
#define TWO_PI 6.283185307179586

mat2 rotate2D(in float _angle){
  return mat2(cos(_angle),
  -sin(_angle),
  sin(_angle),
  cos(_angle));
}

vec3 circle(in vec2 st,in float radius,in vec3 color, in float progress){
  vec2 rxy=vec2(.5,.6);
  vec2 cxy=vec2(.5,.5);
  st-=rxy;
  st=rotate2D(-progress * TWO_PI)*st;
  st+=rxy;
  float dist=distance(st,cxy);
  return color-step(radius,dist);
}

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  vec3 c1=circle(st,.1,vec3(.2,.2,.9),u_frequencies.x);
  vec3 c2=circle(st,.1,vec3(.9,.2,.2),u_frequencies.y);
  vec3 color=max(c1,c2);
  gl_FragColor=vec4(color,1.);
}