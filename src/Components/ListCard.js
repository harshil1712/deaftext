import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';


const ListCard = (props) => {
    const { onPress, source, title } = props;
    const { container, image, textStyle } = styles;
     return(
         <TouchableOpacity onPress={onPress}>
            <View style={container}>
                {source?<Image source={{uri:`${source}`}} style={image} />: null}
                <Text style={textStyle}>{title}</Text>
            </View>
         </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        elevation: 2,
        borderRadius: 5,
        height:75
    },
    image:{
        height: 75,
        width:75,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    },
    textStyle: {
        marginLeft:15,
        fontSize: 18
    }
})

export default ListCard;