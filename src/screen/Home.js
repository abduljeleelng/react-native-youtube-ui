import React, { Component,Fragment } from 'react';
import {ActivityIndicator} from 'react-native';
import { Header, Footer, CardList, } from '../components';
import {data } from '../api'

export default class Home extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            imageList:[],
            loading :true,
        };
    }

    async componentDidMount(){
        this._isMounted = true;
        const imageList = await data();
        this.setState({imageList,loading:false});
        //console.log(JSON.stringify(imageList))
    }
    async componentWillUnmount(){
        this._isMounted=false;
    }

    render() {
        const {imageList, loading} = this.state;
        if(loading) return <ActivityIndicator size="large" />
        return (
            <Fragment>
                <Header />
                <CardList data={imageList} />
                <Footer />
            </Fragment>
        )
    }
}
