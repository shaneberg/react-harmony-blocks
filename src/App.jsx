import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="svg-container" style={{ margin: "10px" }}>
          <svg width={200} height={200}>
            <rect x={10} y={10} width={100} height={10} strokeWidth={2} fill="#ff0000" stroke="black" />
            <rect x={10} y={25} width={100} height={10} strokeWidth={2} fill="transparent" stroke="black" />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
