import React, { Component } from 'react';
import Container from '../components/Container';

class Scene4 extends Component {
  handlePress = () => {
    this.props.navigator.dismissModal();
  };

  render() {
    return (
        <Container
          backgroundColor="#05A5D1"
          onPress={this.handlePress}
        />
    );
  }
}

export default Scene4;
