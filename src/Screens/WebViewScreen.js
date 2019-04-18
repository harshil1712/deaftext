import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

export default class WebViewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return{
            title: navigation.state.params.title
            /* No more header config here! */
        }
    };
  render() {
      const url = this.props.navigation.state.params.url;
      console.log(url);
    return (
        <View style={{ height: 300 }}>
            <WebView 
                source={{uri: `${url}` }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    );
  }
}