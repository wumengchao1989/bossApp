import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './src/components/App';
import MI0101C from './src/components/MI0101C';

export default createStackNavigator({
    Home: {
        screen: App,
        navigationOptions:{
            header:null
        }
    },
    mi0101c:{
        screen:MI0101C,
        navigationOptions:{
            header:null,
        }
    }
},{
    mode: 'modal',
});