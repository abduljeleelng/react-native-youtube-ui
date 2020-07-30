import React from 'react';
import {View,Text,Image} from 'react-native';
import {global} from '../styles';

export default function Card() {
    return (
        <View style={global.videoContent}>
            <Image style={global.videoImage} source={{uri:'https://unsplash.it/600/600'}} />
            <Text>
                Video Card here
            </Text>
        </View>
    )
}
