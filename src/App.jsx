import React, { Component } from 'react';
import AnimatedHarmonyBlock from './AnimatedHarmonyBlock';
import Vex from 'vexflow';
import Select from 'react-select';
import './App.css';

const VF = Vex.Flow;

class App extends Component {

  static getVisualizationOptions() {
    return [
      { label: "Block", value: "block" },
      { label: "Clock", value: "clock" },
      { label: "Circle", value: "circle" },
      { label: "Circle GL", value: "circleGL" },
    ];

  }

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
    const options = App.getVisualizationOptions();
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
              type={this.state && this.state.major_third_type}
              hz={[5, 4]}
            />
            <Select options={options}
              onChange={(option) => {
                this.setState({ major_third_type: option.value });
              }}
            />
          </div>

          <div className="blocks-container">
            Perfect 4th

            <Select options={options}
              onChange={(option) => {
                this.setState({ perfect_fourth_type: option.value });
              }}
            />
            <AnimatedHarmonyBlock
              chord={chordP4}
              type={this.state && this.state.perfect_fourth_type}
              hz={[3, 4]}
            />
          </div>

          <div className="blocks-container">
            Perfect 5th
            <Select options={options}
              onChange={(option) => {
                this.setState({ perfect_fifth_type: option.value });
              }}
            />
            <AnimatedHarmonyBlock
              chord={chordP5}
              type={this.state && this.state.perfect_fifth_type}
              hz={[6, 4]} />
          </div>

          <div className="blocks-container">
            Octave
            <Select options={options}
              onChange={(option) => {
                this.setState({ octave_type: option.value });
              }}
            />
            <AnimatedHarmonyBlock
              chord={chordP8}
              type={this.state && this.state.octave_type}
              hz={[8, 4]} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
