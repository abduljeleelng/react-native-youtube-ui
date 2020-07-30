import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity,FlatList} from 'react-native';
import {global} from '../styles';
import {getImage} from '../asset';


export default class Home extends Component {
    render() {
        return (
            <View style={global.container}>
                <View style={global.topMenu}>
                    <Image 
                    source={getImage('logo')}
                    //source={require('../asset/images/logo.png')}
                    style={global.navLogo} 
                    />
                    <View style={global.nav}>
                        <TouchableOpacity style={global.navItem}>
                            <Text>Searc</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={global.navItem}>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={global.videoContent}>
                    <Text>
                        Video Card here
                    </Text>
                </View>
                <View style={global.navigationBar}>
                    <TouchableOpacity style={global.navItems}>
                        <Text>Home</Text>
                        <Text style={global.navTitle}> Home </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
