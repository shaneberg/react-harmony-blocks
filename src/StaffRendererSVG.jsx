import React, { Component } from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;

// Reference from : https://gist.github.com/wchargin/96f2550531b67c379b3e
class StaffRendererSVG extends Component {
  componentDidMount() {
    const { chord } = this.props;
    const svgContainer = document.createElement('div');
    const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
    const ctx = renderer.getContext();
    const stave = new VF.Stave(0, 0, 100);
    stave.addClef('treble').setContext(ctx).draw();
    const bb = VF.Formatter.FormatAndDraw(ctx, stave, chord);

    const svg = svgContainer.childNodes[0];
    const padding = 10;
    const half = padding / 2;

    svg.style.top = -bb.y + half + Math.max(0, (100 - bb.h) * 2 / 3) + "px";
    svg.style.height = Math.max(100, bb.h);
    svg.style.left = "0px";
    svg.style.width = 100 + "px";
    svg.style.position = "absolute";
    svg.style.overflow = "visible";
    svgContainer.style.height = Math.max(100, bb.h + padding) + "px";
    svgContainer.style.width = 100 + "px";
    svgContainer.style.position = "relative";
    svgContainer.style.display = "inlineBlock";
    this.refs.outer.appendChild(svgContainer);
  }

  render() {
    return (
      <div ref="outer" style={{
        margin: "auto",
        width: "100px",
        padding: 10,
        borderRadius: 10,
        display: "inline-float"
      }} >
        {this.props.title}
      </div>
    );

  }
}

export default StaffRendererSVG;
