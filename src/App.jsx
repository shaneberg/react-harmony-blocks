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
          5/4
          <svg x={10} y={10} height={200} width={200}>
            <AnimatedSVGBlock hz={[5, 4]} />
          </svg>

          4/3
          <svg x={10} y={10} height={200} width={200}>
            <AnimatedSVGBlock hz={[4, 3]} />
          </svg>
          1/2
          <svg x={10} y={10} height={200} width={200}>
            <AnimatedSVGBlock hz={[2, 4]} />
          </svg>
        </div>
      </div>
    );
  }
}


export default App;
