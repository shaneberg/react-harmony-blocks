import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import BlockContainer from './BlockContainer';

class AnimatedSVGBlock extends Component {

  onRest() {
    this.setState({ reset: !(this.state && this.state.reset) });
  }

  render() {
    const duration = 2000;
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
          const props = {
            blocks: [{
              fromRed: 0.8,
              toRed: 1.0,
              fromBlue: 0.8,
              toBlue: 0.2,
              fromGreen: 0.8,
              toGreen: 0.3,
              pos: 0,
              progress: animatedProperties.progress * 3,
            }, {
              fromRed: 0.8,
              toRed: 0.0,
              fromBlue: 0.8,
              toBlue: 0.0,
              fromGreen: 0.8,
              toGreen: 0.9,
              pos: 1,
              progress: animatedProperties.progress * 2,
            },
            ],
          };

          return <BlockContainer {...props} />;
        }}
      </Spring>
    );
  }
}

export default AnimatedSVGBlock;
