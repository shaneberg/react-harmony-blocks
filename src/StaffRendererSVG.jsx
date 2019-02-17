import React, { Component } from 'react';
import Vex from 'vexflow';
import Utils from './Utils';

const VF = Vex.Flow;

// Reference from : https://gist.github.com/wchargin/96f2550531b67c379b3e
class BlockContainer extends Component {
  componentDidMount() {
    const { chord } = this.props;
    // const svgContainer = document.createElement('div');
    const svgContainer = <div></div>;
    const renderer = new VF.Renderer(svgContainer, VF.Renderer.Backends.SVG);
    const ctx = renderer.getContext();
    const stave = new VF.Stave(0, 0, 100);
    stave.addClef('treble').setContext(ctx).draw();
    const bb = VF.Formatter.FormatAndDraw(ctx, stave, chord);

    const svg = svgContainer.childNodes[0];
    const padding = 10;
    const half = padding / 2;
  }

  render() {
    return (<div />);

  }
}

export default BlockContainer;
