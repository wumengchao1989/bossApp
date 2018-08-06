import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import App from './src/components/App';
import BOSS from "./src/components/BOSS";
import Icon from "react-native-vector-icons/FontAwesome";
import BossHome from './src/components/Home/Index';

export default createBottomTabNavigator({
        主页: {
            screen: App
        },
        控制台: {
            screen: BossHome
        },
        我的: {
            screen: BOSS
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
                } else if (routeName === '我的') {
                    iconName = "user";
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
        },
    }
)