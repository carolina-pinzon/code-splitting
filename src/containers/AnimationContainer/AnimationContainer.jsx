import React, { Component } from 'react';
import Vivus from 'vivus';

class AnimationContainer extends Component {
  componentDidMount() {
    new Vivus('ax', { duration: 200, file: '/img/az.svg' });
  }
  render() {
    return (
      <div>
        <div id="ax" />
      </div>
    );
  }
}

export default AnimationContainer;
