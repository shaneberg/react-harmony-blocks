import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import BlockContainer from './BlockContainer';
import ClockContainer from './ClockContainer';

class AnimatedSVGBlock extends Component {

  colorForIndex(index) {

    const table = [
      {
        red: 0.8,
        green: 0,
        blue: 0,
      },
      {
        red: 0.3,
        green: 0.3,
        blue: 0.8,
      },
      {
        red: 0,
        green: 0.6,
        blue: 0,
      },
      {
        red: 0.7,
        green: 0,
        blue: 0.7,
      },
    ];
    return table[index % table.length];
  }

  onRest() {
    this.setState({ reset: !(this.state && this.state.reset) });
  }

  render() {
    const duration = 3000;
    const init = this.state && this.state.reset;

    return (
      <Spring
        immediate={init}
        to={{
          progress: init ? 0.0 : 1.0,
        }}
        from={{
          progress: 0.0,
        }}
        config={{
          duration: duration,
          reset: true,
        }}
        onRest={this.onRest.bind(this)}
      >
        {(animatedProperties) => {
          const blocks = this.props.hz.map((relativeHz, index) => {
            const color = this.colorForIndex(index);
            return {
              fromRed: 1.0,
              toRed: color.red,
              fromGreen: 1.0,
              toGreen: color.green,
              fromBlue: 1.0,
              toBlue: color.blue,
              pos: index,
              progress: animatedProperties.progress * relativeHz,
            };

          });
          const props = { blocks };
          return (
            <g>
              <BlockContainer {...props} />
              <ClockContainer {...props} />
            </g>
          );

        }}
      </Spring>
    );
  }
}

export default AnimatedSVGBlock;
