import React from 'react';
import {FlatList} from 'react-native';
import {global} from '../styles';
import {Card} from '.'

export default function CardList({data}) {
    //console.log(data);
    //console.log("new file , cardList render")
    return (
        <FlatList 
        data={data}
        keyExtractor={(data)=>data.id.toString()}
        renderItem={data=><Card data={data} />}
        />
    )
}
