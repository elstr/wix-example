import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '700',
  },
});

const Container = ({backgroundColor, onPress }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Press me!</Text>
    </TouchableOpacity>
  </View>
);

export default Container;
