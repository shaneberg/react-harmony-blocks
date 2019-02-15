import React, { Component } from 'react';
import AnimatedSVGBlock from './AnimatedSVGBlock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "10px" }}>
          <svg x={0} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[5, 4]} />
          </svg>
          <svg x={250} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[3, 4]} />
          </svg>
          <svg x={500} y={10} height={500} width={200}>
            <AnimatedSVGBlock hz={[8, 4]} />
          </svg>
        </div>
      </div>
    );
  }
}


export default App;
