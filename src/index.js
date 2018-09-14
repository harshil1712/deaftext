import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import TTSScreen from './Screens/TTSScreen';
import LSLScreen from './Screens/LSLScreen';
import STTScreen from './Screens/STTScreen';
import GovtSchemesScreen from './Screens/GovtSchemesScreen';
import OptionScreen from './Screens/OptionScreen';
import WebViewScreen from './Screens/WebViewScreen';

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      TTS: TTSScreen,
      STT: STTScreen,
      LSL: LSLScreen,
      Govt: GovtSchemesScreen,
      Opt: OptionScreen,
      Video: WebViewScreen
    },
    {
      initialRouteName: 'Home',
      /* For styling header
        navigationOptions: {
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
        */
    }
  );

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
