import React, { Component } from 'react';
import AnimatedHarmonyBlock from './AnimatedHarmonyBlock';
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

    const height = 150;
    const width = 120;
    return (
      <div className="App" >
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "auto", display: "block" }}>
          <div className="blocks-container">
            Major 3rd
            <AnimatedHarmonyBlock
              height={height}
              width={width}
              chord={chordM3}
              type="clock"
              hz={[5, 4]}
            />
          </div>

          <div className="blocks-container">
            Perfect 4th
            <AnimatedHarmonyBlock
              chord={chordP4}
              type="circle"
              hz={[3, 4]}
            />
          </div>

          <div className="blocks-container">
            Perfect 5th
            <AnimatedHarmonyBlock chord={chordP5} type="block" hz={[6, 4]} />
          </div>

          <div className="blocks-container">
            Octave
            <AnimatedHarmonyBlock chord={chordP8} type="circle" hz={[8, 4]} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
