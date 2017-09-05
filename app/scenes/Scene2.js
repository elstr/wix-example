import React, { Component } from 'react';
import Container from '../components/Container';

class Scene2 extends Component {
  render() {
    return (
        <Container
          backgroundColor="#8AC24A"
          onPress={() => console.log('pressed!')}
        />
    );
  }
}

export default Scene2;
