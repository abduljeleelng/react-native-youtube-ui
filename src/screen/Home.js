import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity,FlatList} from 'react-native';
import {global} from '../styles';
import {Image} from '../asset/getImage';


export default class Home extends Component {
    render() {
        return (
            <View style={global.container}>
                <View style={global.topMenu}>
                    <Image source={Image('logo')} style={global.navLogo} />
                    <View style={global.nav}>
                        <TouchableOpacity>
                            <Text>Searc</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
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
