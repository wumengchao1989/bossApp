/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';


class MI0101C extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            role:""
        };
    }

    componentDidMount() {

    }

    test=()=>{
        alert("success")
    }


    render() {
        return (
            <View style={styles.container}>
                {MI0101C}
                <Button onClick={()=>this.test()}>test</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default MI0101C
