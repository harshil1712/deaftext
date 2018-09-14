import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Cards = (props) => {
     return(
        <Card onPress={props.onPress} style={[styles.card, props.style]}>
            <Card.Cover source={{ uri: `${props.source}`}} />
            <Card.Content>
                <Title>{props.title}</Title>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 4
    },
})

export default Cards;