import React, { Component } from 'react';
import BlockSVGRenderer from './BlockRendererSVG';
import { Spring } from 'react-spring/renderprops';

class AnimatedSVGBlock extends Component {

  onRest() {
    this.setState({ reset: !(this.state && this.state.reset) });
  }

  render() {
    const hz = this.props.hz > 0 ? this.props.hz : 1;  // default to 1
    const duration = (1/hz);
    const init = this.state && this.state.reset;
    const to = {
      red: init ? 0.8 : 0.2,
      green: init ? 0.8 : 0.2,
      blue: init ? 0.8 : 1.0,
      indicatorXOffset: init ? 0 : 100,
    };

    return (
      <Spring
        immediate={init}
        to={to}
        from={{
          red: 0.4,
          green: 0.4,
          blue: 0.4,
          indicatorXOffset: 0,
        }}
        config={{
          duration: duration,
          reset: true,
        }}
        onRest={this.onRest.bind(this)}
      >
        {(animatedProperties) => {
          const props = {
            x: 10,
            y: 10 + (this.props.pos * 20),
            width: 100,
            height: 20,
            indicatorYOffset: 10,
            indicatorHeight: 20,
            ...animatedProperties,
          };

          return <BlockSVGRenderer {...props} />;
        }}
      </Spring>
    );
  }
}

export default AnimatedSVGBlock;
