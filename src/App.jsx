import React, { Component } from 'react';
import BlockSVGRenderer from './BlockRendererSVG';
import { Spring } from 'react-spring/renderprops';
import './App.css';

class App extends Component {

  onRest() {
    this.setState({reset: !(this.state && this.state.reset)});
  }


  render() {
    const init = this.state && this.state.reset;
    const to = {
      red: init ? 0.8 : 1.0,
      green: init ? 0.8 : 0.2,
      blue: init ? 0.8 : 0.3,
      indicatorXOffset: init ? 0 : 100,
    };

    return (
      <div className="App" >
        <header className="App-header">
          Harmony Blocks
        </header>
        <div className="svg-container" style={{ border: "black", margin: "10px" }}>
          <svg x={10} y={10} height={400} width={500}>
            <Spring
              immediate={init}
              to={to}
              from={{
                red: 0.8,
                green: 0.8,
                blue: 0.8,
                indicatorXOffset: 0,
              }}
              config={{
                duration: 500,
                reset: true,
              }}
              onRest={this.onRest.bind(this)}
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
