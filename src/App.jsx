import React, { Component } from 'react';
import BlockSVGRenderer from './BlockRendererSVG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="svg-container" style={{ border: "black", margin: "10px" }}>
          <svg x={10} y={10} height={400} width={500}>
            <BlockSVGRenderer
              x={10}
              y={10}
              width={100}
              height={10}
              red={1.0}
              green={0}
              blue={0}
              indicatorXOffset={10}
              indicatorYOffset={10}
              indicatorHeight={10}
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
