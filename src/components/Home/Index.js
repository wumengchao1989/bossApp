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
import {createStackNavigator} from "react-navigation";
import LoginC from '../Login/index';

class BOSSHome extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            role:""
        };
    }

    componentDidMount() {
        let vm=this;
        storage.load({
            key: 'loginState',

            // autoSync(default true) means if data not found or expired,
            // then invoke the corresponding sync method
            autoSync: true,

            // syncInBackground(default true) means if data expired,
            // return the outdated data first while invoke the sync method.
            // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
            syncInBackground: true,

            // you can pass extra params to sync method
            // see sync example below for example
            syncParams: {
                extraFetchOptions: {
                    // blahblah
                },
                someFlag: true,
            },
        }).then(ret => {
            // found data go to then()
            alert(ret.ifLogin);
        })
    }

    test=()=>{
        this.props.navigation.navigate("Login")
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>BOSSHome</Text>
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

export default BOSSHome
