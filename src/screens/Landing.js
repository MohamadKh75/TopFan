import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 10
        }}
      >
        <Text> Landing </Text>
      </View>
    );
  }
}

export { Landing };