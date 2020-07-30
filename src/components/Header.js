import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/Feather';
import {global} from '../styles';
import {getImage} from '../asset';

export default function Header() {
    return (
        <View style={global.topMenu}>
            <Image source={getImage('logo')} style={global.navLogo} />
            <View style={global.nav}>
                <TouchableOpacity style={global.navItem}>
                    <IconM name="search" size={25}  />
                </TouchableOpacity>
                <TouchableOpacity style={global.navItem}>
                    <IconM name="account-circle" size={25}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}
