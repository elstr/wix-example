import React, { Component } from 'react';
import Container from '../components/Container';

class Scene1 extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Scene3',
      title: 'Scene 3',
    });
  };

  render() {
    return (
        <Container
          backgroundColor="#FE5722"
          onPress={this.handlePress}
        />
    );
  }
}

export default Scene1;
