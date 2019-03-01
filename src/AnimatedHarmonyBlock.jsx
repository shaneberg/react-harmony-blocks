import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import BlockContainer from './BlockContainer';
import ClockContainer from './ClockContainer';
import CircleContainer from './CircleContainer';
import CircleGLContainer from './CircleGLContainer';
import StaffRendererSVG from './StaffRendererSVG';
import DotContainer from './DotContainer';

class AnimatedHarmonyBlock extends Component {
  constructor(props) {
    super(props);
    this.table = AnimatedHarmonyBlock.getColorTable();
  }

  static getColorTable() {
    return [
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
  }

  colorForIndex(index) {
    return this.table[index % this.table.length];
  }

  onRest() {
    this.setState({ reset: !(this.state && this.state.reset) });
  }

  getContainerForType(type, props) {
    let container = null;
    switch (type) {
      case "block":
        container = <BlockContainer {...props} />;
        break;
      case "dots":
        container = <DotContainer {...props} />;
        break;
      case "clock":
        container = <ClockContainer {...props} />;
        break;
      case "circle":
        container = <CircleContainer {...props} />;
        break;
      case "circleGL":
      default:
        container = <CircleGLContainer {...props} />;
        break;
    }

    return container;
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
              hz: relativeHz,
            };

          });

          const chord = this.props.chord;
          const title = this.props.title;
          const staff = this.props.chord ?
            <StaffRendererSVG title={title} chord={chord} /> :
            null;

          const props = { blocks };
          const type = this.props.type ? this.props.type : "block";
          const container = this.getContainerForType(type, props);

          return (
            <div className="blocks-container">
              {title}
              {staff}
              {container}
            </div>
          );
        }}
      </Spring>
    );
  }
}

export default AnimatedHarmonyBlock;
