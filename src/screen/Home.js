import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity,FlatList} from 'react-native';
import {global} from '../styles';
import {Image} from '../asset/getImage';


export default class Home extends Component {
    render() {
        return (
            <View style={global.container}>
                <View style={global.topMenu}>
                    <Image />
                </View>
            </View>
        )
    }
}
