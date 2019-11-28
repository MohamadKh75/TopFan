import React, { Component } from 'react';
import { View } from 'react-native';
import { A, B, PS } from '../components';

class Login extends Component {
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
        <PS android={<A />} iOS={<B />} />
      </View>
    );
  }
}

export { Login };
