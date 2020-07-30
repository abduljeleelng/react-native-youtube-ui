import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {global} from '../styles';

export default function Footer() {
    return (
        <View style={global.navigationBar}>
            <TouchableOpacity style={global.navItems}>
                <Text>Home</Text>
                <Text style={global.navTitle}> Home </Text>
            </TouchableOpacity>
        </View>
    )
}
