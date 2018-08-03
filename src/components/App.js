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
import {TabNavigator} from 'react-navigation';
import BOSS from "./BOSS";
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from "./Login";
import Echarts from 'native-echarts';
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
            role: ""
        };
    }

    componentDidMount() {

    }

    test = () => {
        this.props.dispatch({
            type: "model/login",
            payload: {
                username: "root",
                password: "Pai=3.14!%(@^"
            }
        })
    };

    render() {
        const option = {
            title: {
                text: 'ECharts demo'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
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
                <Button onClick={() => this.test()}>test</Button>
                <Button onClick={() => this.props.navigation.navigate("mi0101c")}>Move to MI0101C</Button>
                <Echarts option={option} height={400} />
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

const reduxComponent = connect(mapDispatchToProps)(App);

export default TabNavigator({
        主页: {
            screen: reduxComponent
        },
        控制台: {
            screen: Login
        },
        我的:{
            screen:BOSS
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === '主页') {
                    iconName = "home";
                } else if (routeName === '控制台') {
                    iconName = "desktop";
                }else if(routeName === '我的'){
                    iconName = "user";
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
        },}
)


