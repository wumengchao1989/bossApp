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

    }

    test=()=>{
        this.props.dispatch({
            type: "model/login",
            payload: {
                username:"root",
                password:"Pai=3.14!%(@^"
            }
        })
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
function mapDispatchToProps({ model }) {
    return {model};
}
export default connect(mapDispatchToProps)(App)
