import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableNativeFeedback,
  Keyboard
} from "react-native";
import Tts from "react-native-tts";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TTSScreen extends Component {
    static navigationOptions = {
        title: 'Text-to-Speech',
        /* No more header config here! */
      };
  state = {
    voices: [],
    ttsStatus: "initiliazing",
    selectedVoice: "",
    speechRate: 0.5,
    speechPitch: 1,
    text: "This is an example text"
  };

  constructor(props) {
    super(props);
    Tts.addEventListener("tts-start", event =>
      this.setState({ ttsStatus: "started" })
    );
    Tts.addEventListener("tts-finish", event =>
      this.setState({ ttsStatus: "finished" })
    );
    Tts.addEventListener("tts-cancel", event =>
      this.setState({ ttsStatus: "cancelled" })
    );
    Tts.setDefaultRate(this.state.speechRate);
    Tts.setDefaultPitch(this.state.speechPitch);
    Tts.getInitStatus().then(this.initTts);
  }

  initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter(v => !v.networkConnectionRequired && !v.notInstalled)
      .map(v => {
        return { id: v.id, name: v.name, language: v.language };
      });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = voices[17].id;
      try {
        await Tts.setDefaultLanguage(voices[0].language);
        // console.log(voices);
      } catch (err) {
        // My Samsung S9 has always this error: "Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(voices[17].id);
      this.setState({
        voices: availableVoices,
        selectedVoice,
        ttsStatus: "initialized"
      });
    } else {
      this.setState({ ttsStatus: "initialized" });
    }
  };

  readText = async () => {
    Tts.stop();
    Tts.speak(this.state.text);
  };

  onVoicePress = async voice => {
    try {
      await Tts.setDefaultLanguage(voice.language);
    } catch (err) {
      // My Samsung S9 has always this error: "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    await Tts.setDefaultVoice(voice.id);
    this.setState({ selectedVoice: voice.id });
  };
  clearText = ()=>{
    this.setState({text:''})
  }
  render() {
    const speakerIcon = <Icon 
                          name="volume-up" 
                          size={75} 
                          color="#64B5F6" 
                          backgroundColor="#fff"
                          iconStyle={{margin:5}}
                        />
      const clearIcon = <Icon 
                          name="times" 
                          size={75} 
                          color="#f44336" 
                          backgroundColor="#fff"
                          iconStyle={{margin:5}}
                        />
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={Keyboard.dismiss}
        />
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
          <View>
            <TouchableNativeFeedback onPress={this.readText}>
              <View style={styles.btn}>
                {speakerIcon}
              </View>
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback onPress={this.clearText}>
              <View style={styles.clrBtn}>
                {clearIcon}
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 26,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width:100,
    height:100,
    borderRadius:100/2,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent: 'center',
    borderColor:"#64B5F6",
    borderWidth: 2,
    marginTop:25,
    marginRight:25,
  },
  clrBtn:{
    width:100,
    height:100,
    borderRadius:100/2,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent: 'center',
    borderColor:"#f44336",
    borderWidth: 2,
    marginTop:25,
    marginLeft:25
  },
  textInput: {
    borderColor: "gray",
    borderBottomWidth: 1,
    height:300,
    // flex: 1,
    width: "100%",
    fontSize:48
  }
});