import React from 'react';
import {View,Text,Image} from 'react-native';
import {global} from '../styles';
import {getImageFromId}  from '../api'

export default function Card({data}) {
    console.log(JSON.stringify(data));
    //console.log(JSON.stringify(data.item.post_url));
    return (
        <View style={global.videoContent}>
            <Image style={global.videoImage} source={{uri:getImageFromId(data.item.id)}} />
            <View style={global.videoDescription}>
                <Image source={{uri:`https://randomuser.me/api/portraits/men/0.jpg`}} style={global.author} />
                <Text numberOfLines={2} style={global.authorName}>
                    {data.item.author}
                </Text>
            </View>
            <Text>
            </Text>
        </View>
    )
}
