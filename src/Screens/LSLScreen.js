import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ListCard from '../Components/ListCard.js';
import data from '../../data/data.json';

export default class LSLScreen extends Component {
    static navigationOptions = {
        title: 'Learn Sing Language',
        /* No more header config here! */
    };

    renderCards = (item, i) => {
        // console.log(item.title);
        return <ListCard 
                    title={item.title} 
                    key={i}
                    source="https://picsum.photos/75/?random"
                    onPress={()=>{this.props.navigation.navigate('Opt',{
                        title: item.title
                    })}}
                />
    };

  render() {
    //   console.log(data.categories);
    return (
        <ScrollView>
            {data.map(this.renderCards)}
        </ScrollView>        
    );
  }
}