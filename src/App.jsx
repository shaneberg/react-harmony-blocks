import React, { Component } from 'react';
import BlockSVGRenderer from './BlockRendererSVG';
import { Spring } from 'react-spring/renderprops';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "10px" }}>
          <svg x={10} y={10} height={400} width={500}>
            <Spring
              to={{
                red: 1.0,
                green: 0.2,
                blue: 0.3,
                indicatorXOffset: 100,
              }}
              from={{
                red: 0.8,
                green: 0.8,
                blue: 0.8,
                indicatorXOffset: 0,
              }}
              config={{
                duration: 250,
                reset: true,
              }}
            >
              {(animatedProperties) => {
                const props = {
                  x: 10,
                  y: 10,
                  width: 100,
                  height: 20,
                  indicatorYOffset: 10,
                  indicatorHeight: 20,
                  ...animatedProperties,
                };

                return <BlockSVGRenderer {...props} />;
              }}
            </Spring>
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
