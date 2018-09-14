import React, { Component } from 'react';
import { View } from 'react-native';
import Cards from '../Components/Cards.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'DeafText',
        /* No more header config here! */
      };
  render() {
    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <Cards 
                    title='Text-to-Speech' 
                    onPress={()=>{this.props.navigation.navigate('TTS')}} 
                    style={{flex:2}}
                    source="https://www.iserveradmin.com/wp-content/uploads/2017/08/text-to-speech-iserveradmin.com_.png"
                 />
                <Cards 
                    title='Speech-to-Text' 
                    onPress={()=>{this.props.navigation.navigate('STT')}} 
                    style={{flex:2}}
                    source="https://vmacwrites.files.wordpress.com/2017/03/unknown.png?w=720" 
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Cards 
                    title='Learn Sign Language' 
                    onPress={()=>{this.props.navigation.navigate('LSL')}} 
                    style={{flex:2}}
                    source="http://enabled.in/wp/wp-content/uploads/2017/02/ISLRTC-Logo-Design-Contest.png" 
                />
                <Cards 
                    title='Government Schemes' 
                    onPress={()=>{this.props.navigation.navigate('Govt')}} 
                    style={{flex:2}} 
                    source="https://picsum.photos/200/?random"
                />
            </View>
        </View>
    );
  }
}