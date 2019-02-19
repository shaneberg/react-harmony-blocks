import React, { Component } from 'react';
import AnimatedSVGBlock from './AnimatedSVGBlock';
import StaffRendererSVG from './StaffRendererSVG';
import Vex from 'vexflow';
import './App.css';

const VF = Vex.Flow;

class App extends Component {
  render() {
    const chordM3 = [new VF.StaveNote({
      keys: ["c/4", "e/4"],
      duration: "h",
    })];

    const chordP4 = [new VF.StaveNote({
      keys: ["c/4", "f/4"],
      duration: "h",
    })];

    const chordP5 = [new VF.StaveNote({
      keys: ["c/4", "g/4"],
      duration: "h",
    })];

    const chordP8 = [new VF.StaveNote({
      keys: ["c/4", "c/5"],
      duration: "h",
    })];

    return (
      <div className="App" >
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "auto", display: "block" }}>
          <div className="blocks-container">
            <StaffRendererSVG title="Major 3rd" chord={chordM3} />
            <svg height={300} width={120} margin="10px">
              <AnimatedSVGBlock hz={[5, 4]} />
            </svg>
          </div>

          <div className="blocks-container">
            <StaffRendererSVG title="Perfect 4th" chord={chordP4} />
            <svg height={300} width={120}>
              <AnimatedSVGBlock hz={[3, 4]} />
            </svg>
          </div>

          <div className="blocks-container">
            <StaffRendererSVG title="Perfect 5th" chord={chordP5} />
            <svg height={300} width={120}>
              <AnimatedSVGBlock hz={[6, 4]} />
            </svg>
          </div>

          <div className="blocks-container">
            <StaffRendererSVG title="Octave" chord={chordP8} />
            <svg height={300} width={120}>
              <AnimatedSVGBlock hz={[8, 4]} />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
