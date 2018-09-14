import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ListCard from '../Components/ListCard.js';
import data from '../../data/data.json';

export default class OptionScreen extends Component {

    state={
        dataToRender:{}
    }

    static navigationOptions = ({ navigation }) => {
        return{
            title: navigation.state.params.title
            /* No more header config here! */
        }
    };

    componentWillMount(){
        const title  = this.props.navigation.state.params.title;
        console.log(title);
        switch(title){
            case 'Alphabets':
                this.setState({dataToRender:data[0]})
                break;
            case 'Behaviour Nouns':
                this.setState({dataToRender:data[1]})
                break;
            case 'Beverages':
                this.setState({dataToRender:data[2]})
                break;
            case 'Body Parts and Functions':
                this.setState({dataToRender:data[3]})
                break; 
            case 'Calender Items':
                this.setState({dataToRender:data[4]})
                break;
            case 'Colours and Shapes':
                this.setState({dataToRender:data[5]})
                break; 
            case 'Family':
                this.setState({dataToRender:data[6]})
                break;
        }  
    }

    renderCards = (item, i) => {
        return <ListCard 
                    title={item.videoTitle} 
                    key={i}
                    onPress={()=>{this.props.navigation.navigate('Video',{
                        title: item.videoTitle,
                        url: item.url
                    })}}
                />
    };

  render() {
    return (
        
        <ScrollView>
            {this.state.dataToRender.videos.map(this.renderCards)}
        </ScrollView>       
    );
  }
}