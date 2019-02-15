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
          <svg x={10} y={10} height={1000} width={200}>
            <AnimatedSVGBlock hz={[5, 4, 8]} />
          </svg>
          <svg x={10} y={10} height={1000} width={200}>
            <AnimatedSVGBlock hz={[4, 3, 6]} />
          </svg>
          <svg x={10} y={10} height={1000} width={200}>
            <AnimatedSVGBlock hz={[2, 4, 1]} />
          </svg>
        </div>
      </div>
    );
  }
}


export default App;
