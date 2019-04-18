import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';

import Voice from 'react-native-voice';


export default class VoiceTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
  }

  render() {
    const micIcon = <Icon 
                      name="microphone" 
                      size={150} 
                      color="#64B5F6" 
                      backgroundColor="#fff"
                      iconStyle={{margin:5}}
                       />
    return (
      <View style={styles.container}>
        <Text style={{paddingTop:25, paddingBottom:25}}>
          Press the button and start speaking.
        </Text>
        <TouchableNativeFeedback onPress={this._startRecognizing.bind(this)}>
        <View style={styles.btn}>
          {micIcon}
        </View>
        </TouchableNativeFeedback>
        <Text
          style={styles.stat}>
          Result
        </Text>
        
        {this.state.partialResults.map((result, index) => {
          return (
            <ScrollView style={styles.sview}>
            <Text
              key={`partial-result-${index}`}
              style={styles.result}>
              {result}
            </Text>
        </ScrollView>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 5,
    paddingTop:5
  },
  result: {
    fontSize:36
  },
  sview:{
    width:350,
  },
  btn: {
    width:200,
    height:200,
    borderRadius:200/2,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent: 'center',
    borderColor:"#64B5F6",
    borderWidth: 2,
  }
});