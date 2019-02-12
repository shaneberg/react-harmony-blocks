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
          <svg x={10} y={10} height={400} width={500}>
            <AnimatedSVGBlock hz={0.5} pos={0}/>
            <AnimatedSVGBlock hz={1} pos={1}/>
          </svg>
        </div>
      </div>
    );
  }
}


export default App;
