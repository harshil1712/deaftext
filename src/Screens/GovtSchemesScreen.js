import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class GovtSchemesScreen extends Component {
    static navigationOptions = {
        title: 'Government Schemes',
        /* No more header config here! */
      };
  render() {
    return (
        <View>
            <Text>Govt  Screen</Text>
        </View>
    );
  }
}