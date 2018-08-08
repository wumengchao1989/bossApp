import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import app from './dvaApp';
import storage from './storageConfig';
global.storage=storage;

console.disableYellowBox = true;//禁用一些警告

AppRegistry.registerComponent(appName, app);
