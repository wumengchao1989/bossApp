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

class ConsoleIndex extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            role: ""
        };
    }

    componentDidMount() {
        let vm = this;
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                someFlag: true,
            },
        }).then(ret => {
        })
    }

    test = () => {
        this.props.navigation.navigate("Login")
    };


    render() {
        return (
            <View style={styles.container}>
                <View>

                </View>
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

});

export default ConsoleIndex
