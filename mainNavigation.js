import React from 'react';

import {createStackNavigator} from 'react-navigation';
import BottomNavigation from './bottomNavigation';
import LoginC from "./src/components/Login";
import BossHome from './src/components/Console/Index'
import UI0101C from "./src/components/UserInfoSubs/UI0101C";

export default createStackNavigator(
    {
        frontPage:{
            screen:BottomNavigation,
            navigationOptions: () => ({
                header:null
            }),
        },
        Home:{
            screen:BossHome
        },
        Login: {
            screen: LoginC
        },
        UI0101:{
            screen:UI0101C,
            navigationOptions: () => ({
                title: `基本信息`,
                headerBackTitle: `返回`
            }),
        }

    },
)