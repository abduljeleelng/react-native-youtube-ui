import React, { Component,Fragment } from 'react';
import { Header,Card, Footer, } from '../components';

export default class Home extends Component {
    render() {
        return (
            <Fragment style={{flex:1}}>
                <Header />
                <Card />
                <Footer />
            </Fragment>
        )
    }
}
