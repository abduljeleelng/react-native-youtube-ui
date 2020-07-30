import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {global} from '../styles';
import {getImage} from '../asset';

export default function Header() {
    return (
        <View style={global.topMenu}>
            <Image source={getImage('logo')} style={global.navLogo} />
            <View style={global.nav}>
                <TouchableOpacity style={global.navItem}>
                    <Text>Searc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={global.navItem}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
