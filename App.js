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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            role:""
        };
    }

    componentDidMount() {
        let result=fetch('http://47.100.246.45:8082/v1/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'wmc_maintain@qq.com',
                password: 'supercxp@123',
            })
        });
        return result.then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                   role:responseJson.role
                });
                return responseJson.role;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    test=()=>{
        this.props.login();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{this.props.model.name}</Text>
                <Text>{this.state.role}</Text>
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

export default connect(({model}) => ({model}), {login: () => (({type: 'model/login'}))})(App)
