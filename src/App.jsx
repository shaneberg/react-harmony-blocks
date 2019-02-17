import React, { Component } from 'react';
import AnimatedSVGBlock from './AnimatedSVGBlock';
import StaffRendererSVG from './StaffRendererSVG';
import Vex from 'vexflow';
import './App.css';

const VF = Vex.Flow;

class App extends Component {
  render() {
    const chord1 = [new VF.StaveNote({
      keys: ["c/0", "e/4", "g#/8"],
      duration: "w",
  }).addAccidental(0, new VF.Accidental("bb")).addAccidental(2, new VF.Accidental("#"))];
    return (
      <div className="App" >
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "10px" }}>
          <StaffRendererSVG chord={chord1}/>
          <svg x={0} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[5, 4]} />
          </svg>
          <svg x={250} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[3, 4]} />
          </svg>
          <svg x={500} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[8, 4]} />
          </svg>

          <svg x={0} y={500} height={500} width={200}>
            <AnimatedSVGBlock hz={[5, 4, 2]} />
          </svg>
          <svg x={250} y={500} height={500} width={200}>
            <AnimatedSVGBlock hz={[3, 4, 2]} />
          </svg>
          <svg x={500} y={500} height={500} width={200}>
            <AnimatedSVGBlock hz={[8, 4, 2]} />
          </svg>
        </div>
      </div>
    );
  }
}


export default App;
