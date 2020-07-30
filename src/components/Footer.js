import React from 'react';
import {View,Text,TouchableOpacity,Animated} from 'react-native';
import {global} from '../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
const AnimatedIcon = Animated.createAnimatedComponent(IconM)

export default function Footer() {
    return (
        <View style={global.navigationBar}>
            <TouchableOpacity style={global.navItems}>
                <IconM name="home" size={25} />
                <Text style={global.navTitle}> Home </Text>
            </TouchableOpacity>
            <TouchableOpacity style={global.navItems}>
                <IconM name="whatshot" size={25}  />
                <Text style={global.navTitle}> Trending </Text>
            </TouchableOpacity>
            <TouchableOpacity style={global.navItems}>
                <IconM name="subscriptions" size={25}  />
                <Text style={global.navTitle}> Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={global.navItems}>
                <IconM name="folder" size={25}  />
                <Text style={global.navTitle}> Folder </Text>
            </TouchableOpacity>
        </View>
    )
}
