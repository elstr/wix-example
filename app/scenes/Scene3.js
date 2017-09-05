import React, { Component } from 'react';
import Container from '../components/Container';

class Scene3 extends Component {
  handlePress = () => {
    this.props.navigator.showModal({
      screen: 'Scene4',
      title: 'Scene 4',
    });
  };

  render() {
    return (
        <Container
          backgroundColor="#9C27B0"
          onPress={this.handlePress}
        />
    );
  }
}

export default Scene3;
