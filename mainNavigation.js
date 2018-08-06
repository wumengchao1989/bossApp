import React from 'react';

import {createStackNavigator} from 'react-navigation';
import BottomNavigation from './bottomNavigation';
import MI0101C from "./src/components/MI0101C";
import LoginC from "./src/components/Login";
import BossHome from './src/components/Home/Index'

export default createStackNavigator(
    {
        frontPage:{
            screen:BottomNavigation,
            navigationOptions: () => ({
                header:null
            }),
        },
        functionPage: {
            screen: MI0101C,
            navigationOptions: () => ({
                title: `A`,
                headerBackTitle: "返回"
            }),
        },
        Home:{
            screen:BossHome
        },
        Login: {
            screen: LoginC
        },
    },
)