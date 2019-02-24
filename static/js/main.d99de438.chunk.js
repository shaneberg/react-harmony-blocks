(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,r){},119:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(9),s=r.n(o),c=(r(54),r(2)),i=r(3),l=r(5),u=r(4),p=r(6),h=r(47),f=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"getHexForFloats",value:function(e,t,r){var n="#",a=Math.round(255*e),o=Math.round(255*t),s=Math.round(255*r);return n+=a.toString(16).padStart(2,0),n+=o.toString(16).padStart(2,0),n+=s.toString(16).padStart(2,0)}},{key:"lerp",value:function(e,t,r){var n=r*(t-e)+e;return n}}]),e}(),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.getHexForFloats(this.props.red,this.props.green,this.props.blue);return a.a.createElement("svg",null,a.a.createElement("g",null,a.a.createElement("rect",{x:this.props.x,y:this.props.y,width:this.props.width,height:this.props.height,strokeWidth:1,fill:e,stroke:"black"}),a.a.createElement("line",{x1:this.props.x+this.props.indicatorXOffset,y1:this.props.y,x2:this.props.x+this.props.indicatorXOffset,y2:this.props.y+this.props.height,stroke:"black"})))}}]),t}(n.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(d,{key:t,x:10,y:10+20*e.pos,width:100,height:20,indicatorYOffset:10,indicatorHeight:10,indicatorXOffset:100*r,red:f.lerp(e.fromRed,e.toRed,r),green:f.lerp(e.fromGreen,e.toGreen,r),blue:f.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("svg",null,e)}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.x?this.props.x:0,r=(this.props.y?this.props.y:0)+this.props.height,n=t+this.props.width,o=r,s=t+this.props.width/2,c=this.props.y?this.props.y:0,i="".concat(t,",").concat(r," ").concat(n,",").concat(o," ").concat(s,",").concat(c),l="rotate(".concat(this.props.rotation,", ").concat(s,", ").concat(r,")");return a.a.createElement("svg",null,a.a.createElement("g",{transform:l},a.a.createElement("polygon",{points:i,fill:e,stroke:"black"})))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(b,{key:t,x:50,y:0,width:10,height:30,rotation:360*r,red:f.lerp(e.fromRed,e.toRed,r),green:f.lerp(e.fromGreen,e.toGreen,r),blue:f.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("svg",null,e)}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=f.getHexForFloats(this.props.red,this.props.green,this.props.blue),t=this.props.y+this.props.height,r=this.props.y,n=this.props.x+this.props.width/2,o=r+this.props.height/2,s="rotate(".concat(this.props.rotation,", ").concat(n,", ").concat(t,")");return a.a.createElement("svg",null,a.a.createElement("g",{transform:s},a.a.createElement("circle",{cx:n,cy:o,r:this.props.width,fill:e,stroke:"black"})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.blocks.map(function(e,t){var r=e.progress%1;return a.a.createElement(g,{key:t,x:50,y:10,width:10,height:15,rotation:360*r,red:f.lerp(e.fromRed,e.toRed,r),green:f.lerp(e.fromGreen,e.toGreen,r),blue:f.lerp(e.fromBlue,e.toBlue,r)})});return a.a.createElement("svg",null,e)}}]),t}(n.Component),O=r(42),k=r(13),j=r(43),E=r(44),x=r.n(E);function w(){var e=Object(O.a)(["",""]);return w=function(){return e},e}var _=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({shader:x.a})}},{key:"render",value:function(){var e=null;if(this.state&&this.state.shader){var t=k.Shaders.create({circle:{frag:Object(k.GLSL)(w(),this.state.shader)}});e=a.a.createElement(j.Surface,{width:100,height:100},a.a.createElement(k.Node,{shader:t.circle,uniforms:{u_resolution:[100,100],u_time:this.props.blocks[0].progress}}))}return a.a.createElement("div",null,e)}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(_,{x:50,y:10,width:10,height:15,blocks:this.props.blocks})}}]),t}(n.Component),S=r(17),F=r.n(S),R=F.a.Flow,G=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).svgRef=a.a.createRef(),r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.chord,t=this.svgRef.current,r=new R.Renderer(t,R.Renderer.Backends.SVG).getContext(),n=new R.Stave(0,0,100);n.addClef("treble").setContext(r).draw();var a=R.Formatter.FormatAndDraw(r,n,e);this.setState({bb:a})}},{key:"render",value:function(){var e=this.state?this.state.svg:null,t=this.state?this.state.bb:null,r=t?t.x:0,n=t?t.y:0,o=n,s=t?Math.max(200,t.h):0,c=this.props.title;return a.a.createElement("svg",{x:r,y:n,top:o,left:"0px",width:"100px",height:s,ref:this.svgRef},a.a.createElement("text",null,c),e)}}]),t}(n.Component),B=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).table=t.getColorTable(),r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"colorForIndex",value:function(e){return this.table[e%this.table.length]}},{key:"onRest",value:function(){this.setState({reset:!(this.state&&this.state.reset)})}},{key:"getContainerForType",value:function(e,t){var r=null;switch(e){case"block":r=a.a.createElement(m,t);break;case"clock":r=a.a.createElement(v,t);break;case"circle":r=a.a.createElement(y,t);break;case"circleGL":default:r=a.a.createElement(C,t)}return r}},{key:"render",value:function(){var e=this,t=this.state&&this.state.reset;return a.a.createElement(h.a,{immediate:t,to:{progress:t?0:1},from:{progress:0},config:{duration:3e3,reset:!0},onRest:this.onRest.bind(this)},function(t){var r=e.props.hz.map(function(r,n){var a=e.colorForIndex(n);return{fromRed:1,toRed:a.red,fromGreen:1,toGreen:a.green,fromBlue:1,toBlue:a.blue,pos:n,progress:t.progress*r}}),n=e.props.chord,o=e.props.title,s=e.props.chord?a.a.createElement(G,{title:o,chord:n}):null,c={blocks:r},i=e.props.type?e.props.type:"block",l=e.getContainerForType(i,c);return a.a.createElement("div",{className:"blocks-container"},o,s,l)})}}],[{key:"getColorTable",value:function(){return[{red:.8,green:0,blue:0},{red:.3,green:.3,blue:.8},{red:0,green:.6,blue:0},{red:.7,green:0,blue:.7}]}}]),t}(n.Component),N=r(14),L=(r(111),F.a.Flow),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,r=[new L.StaveNote({keys:["c/4","e/4"],duration:"h"})],n=[new L.StaveNote({keys:["c/4","f/4"],duration:"h"})],o=[new L.StaveNote({keys:["c/4","g/4"],duration:"h"})],s=[new L.StaveNote({keys:["c/4","c/5"],duration:"h"})],c=t.getVisualizationOptions();return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Harmony Blocks"),a.a.createElement("div",{className:"svg-container",style:{border:"black",margin:"auto",display:"block"}},a.a.createElement("div",{className:"blocks-container"},"Major 3rd",a.a.createElement(B,{height:150,width:120,chord:r,type:this.state&&this.state.major_third_type,hz:[5,4]}),a.a.createElement(N.a,{options:c,onChange:function(t){e.setState({major_third_type:t.value})}})),a.a.createElement("div",{className:"blocks-container"},"Perfect 4th",a.a.createElement(N.a,{options:c,onChange:function(t){e.setState({perfect_fourth_type:t.value})}}),a.a.createElement(B,{chord:n,type:this.state&&this.state.perfect_fourth_type,hz:[3,4]})),a.a.createElement("div",{className:"blocks-container"},"Perfect 5th",a.a.createElement(N.a,{options:c,onChange:function(t){e.setState({perfect_fifth_type:t.value})}}),a.a.createElement(B,{chord:o,type:this.state&&this.state.perfect_fifth_type,hz:[6,4]})),a.a.createElement("div",{className:"blocks-container"},"Octave",a.a.createElement(N.a,{options:c,onChange:function(t){e.setState({octave_type:t.value})}}),a.a.createElement(B,{chord:s,type:this.state&&this.state.octave_type,hz:[8,4]}))))}}],[{key:"getVisualizationOptions",value:function(){return[{label:"Block",value:"block"},{label:"Clock",value:"clock"},{label:"Circle",value:"circle"},{label:"Circle GL",value:"circleGL"}]}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\n#define PI_TWO 1.570796326794897\n#define PI 3.141592653589793\n#define TWO_PI 6.283185307179586\n\nmat2 rotate2D(in float _angle){\n  return mat2(cos(_angle),\n  -sin(_angle),\n  sin(_angle),\n  cos(_angle));\n}\n\nvec3 circle(in vec2 st,in float radius){\n  vec3 color=vec3(.2,.2,.9);\n  vec2 rxy=vec2(.5,.6);\n  vec2 cxy=vec2(.5,.5);\n  float speed = 10.0;\n  st=st-rxy;\n  st=rotate2D(-u_time * speed)*st;\n  st+=rxy;\n  float dist=distance(st,cxy);\n  return color-step(radius,dist);\n}\n\nvoid main(){\n  vec2 st=gl_FragCoord.xy/u_resolution.xy;\n  vec3 color=circle(st,.1);\n  gl_FragColor=vec4(color,1.);\n}"},49:function(e,t,r){e.exports=r(119)},54:function(e,t,r){}},[[49,1,2]]]);
//# sourceMappingURL=main.d99de438.chunk.js.map