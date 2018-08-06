/**
 * Sample React Native Index
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'antd-mobile-rn';
import {connect} from 'dva-no-router';
import Echarts from 'native-echarts';


type Props = {};

class Home extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            role: ""
        };
    }

    componentDidMount() {
    }


    render() {
        const option = {
            title: {
                text: 'ECharts demo'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{this.props.model.name}</Text>
                <Text>{this.state.role}</Text>
                <Echarts option={option} height={400}/>
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

function mapDispatchToProps({model}) {
    return {model};
}


export default connect(mapDispatchToProps)(Home);


