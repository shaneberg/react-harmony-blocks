import React, { Component } from 'react';
// import BlockSVGRenderer from './BlockRendererSVG';
import { Spring } from 'react-spring/renderprops';
import BlockContainer from './BlockContainer';

class AnimatedSVGBlock extends Component {

  onRest() {
    this.setState({ reset: !(this.state && this.state.reset) });
  }

  render() {
    // const hz = this.props.hz > 0 ? this.props.hz : 1;  // default to 1
    const duration = 1000;
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
            fromRed: 0.8,
            toRed: 1.0,
            fromBlue: 0.8,
            toBlue: 0.0,
            fromGreen: 0.8,
            toGreen: 0.0,
            pos: this.props.pos,
            ...animatedProperties,
          };

          return <BlockContainer {...props} />;
          // return <BlockSVGRenderer {...props} />;
        }}
      </Spring>
    );
  }
}

export default AnimatedSVGBlock;
