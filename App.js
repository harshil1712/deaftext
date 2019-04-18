import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/Screens/HomeScreen';
import TTSScreen from './src/Screens/TTSScreen';
import LSLScreen from './src/Screens/LSLScreen';
import STTScreen from './src/Screens/STTScreen';
import GovtSchemesScreen from './src/Screens/GovtSchemesScreen';
import OptionScreen from './src/Screens/OptionScreen';
import WebViewScreen from './src/Screens/WebViewScreen';

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
